(ns chakrates.core
  (:require [reagent.core :as r :refer [atom]]
            [cljs-bach.synthesis :as audio :refer [connect->]]
            [squelch.core :as s]))

(enable-console-print!)

(defonce context (audio/audio-context))

(defonce app-state (atom {:chakra 5, :color "blue", :freq 528, :is-playing false}))

(defn set-level! [chakra]
  (swap! app-state assoc :chakra (:chakra chakra))
  (swap! app-state assoc :color (:color chakra))
  (swap! app-state assoc :freq (:freq chakra)))

(defn toggle-play []
  (swap! app-state assoc :is-playing (not (:is-playing @app-state))))

(defn ping [freq]
  (connect->
    (audio/sine freq)
    (audio/percussive 0.3 1.6)
    (audio/gain 0.4)))

(defn chakra [freq] 
  [:div
    (-> (ping freq)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))])

(def chakras [{:chakra 9 :freq 963 :color "violet" :location "crown"}
              {:chakra 8 :freq 852 :color "purple" :location "3rd eye"}
              {:chakra 7 :freq 741 :color "skyblue" :location "throat"}
              {:chakra 6 :freq 639 :color "green" :location "heart"}
              {:chakra 5 :freq 528 :color "yellow" :location "solar plexus"}
              {:chakra 4 :freq 417 :color "orange" :location "sacral"}
              {:chakra 3 :freq 369 :color "red" :location "root"}
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
          :class
          (if (= (:chakra @app-state) (:chakra chakra)) "active")
          :on-click #(set-level! chakra)}
         (:location chakra)]))]])

(defn controls []
  [:div#controls
   [:input.btn {:type "button"
                :value (if (:is-playing @app-state) "Stop" "Play")
                :on-click #(toggle-play)}]])

(defn meta-data []
  [:div#meta-data
   [:ul
    [:li "STATE: "(str @app-state)]
    [:li "CURRENT TIME: "(.-currentTime context)]]])

(defn main []
  [:div#main 
   [controls]
   [display-chakras]
   [meta-data]
   (chakra (:freq @app-state))
   ])

(r/render-component [main] (. js/document (getElementById "app")))

(defn on-js-reload [])
