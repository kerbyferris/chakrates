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

(def EVENTCHANNEL (chan))

(defonce context (audio/audio-context))

(defonce chakras [{:number 9 :freq 963 :color "violet" :location "crown"}
                  {:number 8 :freq 852 :color "mediumpurple" :location "3rd eye"}
                  {:number 7 :freq 741 :color "skyblue" :location "throat"}
                  {:number 6 :freq 639 :color "yellowgreen" :location "heart"}
                  {:number 5 :freq 528 :color "gold" :location "solar plexus"}
                  {:number 4 :freq 417 :color "orange" :location "sacral"}
                  {:number 3 :freq 369 :color "indianred" :location "root"}
                  {:number 2 :freq 285 :color "#aaa" :location "foot"}
                  {:number 1 :freq 174 :color "#eee" :location "earthstar"}])

(defonce app-state (atom {:chakra {:number 5,
                                   :freq 528,
                                   :color "yellowgreen",
                                   :location "heart"},
                          :word "chakrates"
                          }))

(defn get-chakra [number]
  (first (filter #(= number (:number %)) chakras)))

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
  (number-to-digit (word-to-number word)))

(defn ping []
  (connect->
    (add (sine (:freq (:chakra @app-state)))
         (sine (+ (count (:word @app-state)) (:freq (:chakra @app-state)))))
    (percussive 0.8 3)
    (low-pass 200)
    (gain 0.4)))

(def EVENTS
  {:update-chakra (fn [{:keys [active-chakra]}]
                    (swap! app-state assoc-in [:chakra] active-chakra)),
   :update-word (fn [{:keys [active-word]}]
                  (swap! app-state assoc :word active-word)
                  (swap! app-state assoc-in [:chakra]
                         (get-chakra (word-to-numerology active-word)))
                  (-> (ping)
                      (connect-> destination)
                      (run-with context (audio/current-time context) 3)))})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(defonce word-uri "http://setgetgo.com/randomword/get.php")

(defn handler [response]
  (put! EVENTCHANNEL [:update-word {:active-word response}])) 

(defn get-word []
  (GET word-uri {:response-format :text
                 :keywords? true
                 :handler handler }))

(defn display-chakras []
  [:div#chakras {:style {:background-color (:color (:chakra @app-state))}}
   [:ul
    (doall
      (for [chakra chakras] ^{:key (:number chakra)}
        [:li.chakra
         {:id (str "chakra-" (:number chakra)),
          :style {:background-color (:color chakra)}
          :class (if (= (:chakra @app-state) (:number chakra)) "active")
          :on-click (fn [event] (put! EVENTCHANNEL [:update-chakra {:active-chakra chakra}]))}
         (:location chakra)]))]])

(defn controls []
  [:div#controls
   [:input.btn {:type "button"
                :value "Get Word"
                :on-click #(get-word)}]])

(defn meta-data []
  [:div#meta-data
   [:ul
    [:li "STATE: "(str @app-state)]]])

(defn main []
  [:div#main 
   [controls]
   [:div#word
    [:p (:word @app-state)]
     [:ul {:style {:color (:color (:chakra @app-state))}}
      [:li "chakra: " (:number (:chakra @app-state))]
      [:li "frequency: " (:freq (:chakra @app-state))]
      [:li "location: " (:location (:chakra @app-state))]
      ]]
   [display-chakras]])

(r/render-component [main] (. js/document (getElementById "app")))

(defn on-js-reload [])
