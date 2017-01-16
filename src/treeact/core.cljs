(ns treeact.core
  (:require [reagent.core :as r :refer [atom]]
            [cljs-bach.synthesis :as audio :refer [connect->]]
            [squelch.core :as s]))

(enable-console-print!)

(defonce context (audio/audio-context))

(defonce app-state (atom {:chakra 5, :color "blue"}))

(defn set-level! [level]
  (swap! app-state assoc :chakra (:chakra level))
  (swap! app-state assoc :color (:color level)))

(defn ping [freq]
  (connect->
    (audio/sine freq)         ; Try a sawtooth wave.
    (audio/percussive 0.3 1.6) ; Try varying the attack and decay.
    (audio/gain 0.4)))          ; Try a bigger gain.

(defn chakra-1 [] 
  [:div
    (-> (ping 174)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
   ]
  )
(defn chakra-2 []
  [:div
    (-> (ping 285)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
    ]
  )
(defn chakra-3 []
  [:div
    (-> (ping 369)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
    ]
  )
(defn chakra-4 []
  [:div
    (-> (ping 417)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
    ]
  )
(defn chakra-5 []
  [:div
    (-> (ping 528)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
    ]
  )
(defn chakra-6 []
  [:div
    (-> (ping 639)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
    ]
  )
(defn chakra-7 []
  [:div
    (-> (ping 741)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
    ]
  )
(defn chakra-8 []
  [:div
    (-> (ping 852)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
    ]
  )
(defn chakra-9 []
  [:div
    (-> (ping 963)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))
    ]
  )

(def chakras [{:chakra 1 :frequency 174 :color "white" :location "foot" :render [chakra-1]}
              {:chakra 2 :frequency 285 :color "#aaa" :location "placenta" :render [chakra-2]}
              {:chakra 3 :frequency 369 :color "red" :location "root" :render [chakra-3]}
              {:chakra 4 :frequency 417 :color "orange" :location "sacral" :render [chakra-4]}
              {:chakra 5 :frequency 528 :color "yellow" :location "solar plexus" :render [chakra-5]}
              {:chakra 6 :frequency 639 :color "green" :location "heart" :render [chakra-6]}
              {:chakra 7 :frequency 741 :color "skyblue" :location "throat" :render [chakra-7]}
              {:chakra 8 :frequency 852 :color "purple" :location "3rd eye" :render [chakra-8]}
              {:chakra 9 :frequency 963 :color "violet" :location "crown" :render [chakra-9]}])

(defn meter []
   [:div#meter
     (doall
       (for [level chakras] ^{:key (:chakra level )}
         [:div.chakra
          {:id (str "chakra-" (:chakra level)),
           :style {:background-color (:color level)}
           :class
           (if (= (:chakra @app-state) (:chakra level)) "active")
           :on-click #(set-level! level)}
          [:span (:chakra level)]]))])

(defn controls []
  [:div#controls
   [:input.btn {:type "button" :value "Play"
                :on-click #(println "Playing")}]
   [:input.btn {:type "button" :value "Stop"
                :on-click #(println "Stopping")}]])

(defn below-threshold? [level]
  (<= (:chakra @app-state) (:chakra level)))

(defn is-level? [level]
  (= (:chakra @app-state) (:chakra level)))

(defn render-levels []
  ; (doall (map :render (filter below-threshold? chakras))))
  (doall (map :render (filter is-level? chakras))))

(defn main []
  [:div#main 
   [meter]
   [controls]
   (render-levels)
   [:div#meta-data
    [:ul
     [:li "STATE: "(str @app-state)]
     [:li "CURRENT TIME: "(.-currentTime context)]]]
   ])

(r/render-component [main] (. js/document (getElementById "app")))

(defn on-js-reload [])
