(ns chakrates.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET ajax-request]]
            [cljs.core.async :refer [put! chan <!]]
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
                          :location "heart"
                          :volume full-volume
                          :word "chakrates"
                          }))

(defonce chakras [{:chakra 9 :freq 963 :color "violet" :location "crown"}
                  {:chakra 8 :freq 852 :color "mediumpurple" :location "3rd eye"}
                  {:chakra 7 :freq 741 :color "skyblue" :location "throat"}
                  {:chakra 6 :freq 639 :color "yellowgreen" :location "heart"}
                  {:chakra 5 :freq 528 :color "gold" :location "solar plexus"}
                  {:chakra 4 :freq 417 :color "orange" :location "sacral"}
                  {:chakra 3 :freq 369 :color "indianred" :location "root"}
                  {:chakra 2 :freq 285 :color "#aaa" :location "foot"}
                  {:chakra 1 :freq 174 :color "#eee" :location "earthstar"}])

(defn get-chakra [number]
  (first (filter #(= number (:chakra %)) chakras)))

(defonce alphanumeric-map
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

(defn ping []
  (connect->
    (add (sine (:freq @app-state))
         (sine (+ (count (:word @app-state)) (:freq @app-state))))
    (percussive 0.8 3)
    (low-pass 200)
    (gain (:volume @app-state))))

(defn set-word! [word]
  (let [chakra (get-chakra (word-to-numerology word))]
    (swap! app-state assoc :chakra (:chakra chakra))
    (swap! app-state assoc :color (:color chakra))
    (swap! app-state assoc :freq (:freq chakra))
    (swap! app-state assoc :location (:location chakra)))
  (swap! app-state assoc :word word)
  (-> (ping)
      (connect-> destination)
      (run-with context (audio/current-time context) 3)))

(defonce word-uri "http://setgetgo.com/randomword/get.php")

(defn handler [response]
   (set-word! (str response)))

(defn get-word []
  (GET word-uri {:response-format :text
                 :keywords? true
                 :handler handler }))

(defn display-chakras []
  [:div#chakras {:style {:background-color (:color @app-state)}}
   [:ul
    (doall
      (for [chakra chakras] ^{:key (:chakra chakra)}
        [:li.chakra
         {:id (str "chakra-" (:chakra chakra)),
          :style {:background-color (:color chakra)}
          :class (if (= (:chakra @app-state) (:chakra chakra)) "active")}
         (:location chakra)]))]])

(defn controls []
  [:div#controls
   [:input.btn {:type "button"
                :value "Get Word"
                :on-click #(set-word! (get-word))}]])

(defn meta-data []
  [:div#meta-data
   [:ul
    [:li "STATE: "(str @app-state)]]])

(defn main []
  [:div#main 
   [controls]
   [:div#word
    [:p (:word @app-state)]
     [:ul
      [:li "chakra: " (:chakra @app-state)]
      [:li "frequency: " (:freq @app-state)]
      [:li "location: " (:location @app-state)]
      ]]
   [display-chakras]])

(r/render-component [main] (. js/document (getElementById "app")))

(defn on-js-reload [])
