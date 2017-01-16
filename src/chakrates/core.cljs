(ns chakrates.core
  (:require [reagent.core :as r :refer [atom]]
            [cljs-bach.synthesis :as audio
             :refer [connect-> sine percussive low-pass gain add run-with destination]]
            [leipzig.melody :refer [all bpm is phrase tempo then times where with]]
            [squelch.core :as s]))

(enable-console-print!)

(defonce context (audio/audio-context))

(defonce full-volume 0.4)

(defonce app-state (atom {:chakra 5,
                          :color "yellow",
                          :freq 528,
                          :volume full-volume
                          :is-playing true
                          :amp-mod 6
                          }))

(defn set-level! [chakra]
  (swap! app-state assoc :chakra (:chakra chakra))
  (swap! app-state assoc :color (:color chakra))
  (swap! app-state assoc :freq (:freq chakra)))

(defn toggle-play []
  (let [is-playing (:is-playing @app-state)]
    (if is-playing
      (swap! app-state assoc :volume 0)
      (swap! app-state assoc :volume full-volume))
    (swap! app-state assoc :is-playing (not is-playing))))

(defn ping [freq volume amp-mod]
  (connect->
    (add
      (sine freq)
      (sine (+ amp-mod freq))
      )
    (percussive 0.8 3)
    (low-pass 200)
    (gain volume)
    )
  )

(defn chakra [freq gain amp-mod]
  [:div
    (-> (ping freq gain amp-mod)
        (connect-> destination)
        (run-with context (audio/current-time context) 3)
        )
    ])

(def chakras [{:chakra 9 :freq 963 :color "violet" :location "crown"}
              {:chakra 8 :freq 852 :color "mediumpurple" :location "3rd eye"}
              {:chakra 7 :freq 741 :color "skyblue" :location "throat"}
              {:chakra 6 :freq 639 :color "yellowgreen" :location "heart"}
              {:chakra 5 :freq 528 :color "gold" :location "solar plexus"}
              {:chakra 4 :freq 417 :color "orange" :location "sacral"}
              {:chakra 3 :freq 369 :color "indianred" :location "root"}
              {:chakra 2 :freq 285 :color "#aaa" :location "placenta"}
              {:chakra 1 :freq 174 :color "#eee" :location "foot"}])

(defn display-chakras []
  [:div#chakras {:style {:background-color (:color @app-state)}}
   [:ul
    (doall
      (for [chakra chakras] ^{:key (:chakra chakra)}
        [:li.chakra
         {:id (str "chakra-" (:chakra chakra)),
          :style {:background-color (:color chakra)}
          :class (if (= (:chakra @app-state) (:chakra chakra)) "active")
          :on-click #(set-level! chakra)}
         (:location chakra)]))]])

(defn controls []
  [:div#controls
   [:input.btn {:type "button"
                :value (if (:is-playing @app-state) "Stop" "Play")
                :on-click #(toggle-play)}]])

(def alphanumeric-map
  (zipmap
    (map keyword (seq "abcdefghijklmnopqrstuvwxyz"))
    (range 1 27)))

(defn add-digits [number]
  (apply + (map int (seq (str number)))))

(defn word-to-number [word]
  (int (apply str (map alphanumeric-map (map keyword (seq word))))))

(defn number-to-digit [number]
  (loop [n number]
    (if (= 1 (count (str n)))
      n (recur (add-digits n)))))

(defn word-to-numerology [word]
  (number-to-digit
    (word-to-number word)))

(defn meta-data []
  [:div#meta-data
   [:ul
    [:li "STATE: "(str @app-state)]
    [:li "CURRENT TIME: "(.-currentTime context)]
    [:li "WORD:" (word-to-numerology "blahhhhhhh")]]])

(defn main []
  [:div#main 
   [display-chakras]
   [controls]
   [meta-data]
   (chakra (:freq @app-state) (:volume @app-state) (:amp-mod @app-state))
   ])

(r/render-component [main] (. js/document (getElementById "app")))

(defn on-js-reload [])
