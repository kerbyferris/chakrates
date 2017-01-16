(ns chakrates.core
  (:require [reagent.core :as r :refer [atom]]
            [cljs-bach.synthesis :as audio :refer [connect->]]
            [squelch.core :as s]))

(enable-console-print!)

(defonce context (audio/audio-context))

(defonce app-state (atom {:chakra 5, :color "blue", :freq 528}))

(defn ping [freq]
  (connect->
    (audio/sine freq)         ; Try a sawtooth wave.
    (audio/percussive 0.3 1.6) ; Try varying the attack and decay.
    (audio/gain 0.4)))          ; Try a bigger gain.

(defn chakra [freq] 
  [:div
    (-> (ping freq)
        (audio/connect-> audio/destination)
        (audio/run-with context (audio/current-time context) 1.0))])

(defn set-level! [chakra]
  (swap! app-state assoc :chakra (:chakra chakra))
  (swap! app-state assoc :color (:color chakra))
  (swap! app-state assoc :freq (:freq chakra)))

(def chakras [{:chakra 9 :freq 963 :color "violet" :location "crown"}
              {:chakra 8 :freq 852 :color "purple" :location "3rd eye"}
              {:chakra 7 :freq 741 :color "skyblue" :location "throat"}
              {:chakra 6 :freq 639 :color "green" :location "heart"}
              {:chakra 5 :freq 528 :color "yellow" :location "solar plexus"}
              {:chakra 4 :freq 417 :color "orange" :location "sacral"}
              {:chakra 3 :freq 369 :color "red" :location "root"}
              {:chakra 2 :freq 285 :color "#aaa" :location "placenta"}
              {:chakra 1 :freq 174 :color "white" :location "foot"}])

(defn display-chakras []
  [:div#chakras
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
   [:input.btn {:type "button" :value "Play"
                :on-click #(chakra (:freq @app-state))}]
   [:input.btn {:type "button" :value "Stop"
                :on-click #(println "Stopping")}]])

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
   ])

(r/render-component [main] (. js/document (getElementById "app")))

(defn on-js-reload [])
