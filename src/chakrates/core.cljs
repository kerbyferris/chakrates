(ns chakrates.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET ajax-request]]
            [cljs.core.async :refer [put! chan <!]]
            [cljs-bach.synthesis :as audio
             :refer [connect-> sine percussive low-pass gain add run-with destination]]
            [chakrates.numerology :as numerology :refer [word-to-numerology]]
            [chakrates.util :as util]
            [chakrates.data :as data :refer [chakras]]))

(enable-console-print!)

(defonce app-state (atom {:chakra {:number 5,
                                   :freq 528,
                                   :color "yellowgreen",
                                   :location "heart"},
                          :word "chakrates"}))

(defonce context (audio/audio-context))

(defn ping []
  (connect->
    (add (sine (:freq (:chakra @app-state)))
         (sine (+ (count (:word @app-state)) (:freq (:chakra @app-state)))))
    (percussive 0.8 3)
    (low-pass 200)
    (gain 0.4)))

(def EVENTCHANNEL (chan))

(def EVENTS
  {:update-chakra (fn [{:keys [active-chakra]}]
                    (swap! app-state assoc-in [:chakra] active-chakra)),
   :update-word (fn [{:keys [active-word]}]
                  (swap! app-state assoc :word active-word)
                  (swap! app-state assoc-in [:chakra]
                         (util/get-chakra-by-number (word-to-numerology active-word))))
   :play-tone (fn []
                  (-> (ping)
                      (connect-> destination)
                      (run-with context (audio/current-time context) 3)))})

(go
  (while true
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ((event-name EVENTS) event-data))))

(defonce word-uri "http://setgetgo.com/randomword/get.php")

(defn handler [response]
  (put! EVENTCHANNEL [:update-word {:active-word response}])
  (put! EVENTCHANNEL [:play-tone]))

(defn get-word []
  (GET word-uri {:response-format :text
                 :keywords? true
                 :handler handler }))

(defn display-chakras [EVENTCHANNEL]
  [:div#chakras {:style {:background-color (:color (:chakra @app-state))}}
   [:ul
    (doall
      (for [chakra chakras] ^{:key (:number chakra)}
        [:li.chakra
         {:id (str "chakra-" (:number chakra)),
          :style {:background-color (:color chakra)}
          :class (if (= (:chakra @app-state) chakra) "active")
          :on-click (fn [event]
                      (put! EVENTCHANNEL [:update-chakra {:active-chakra chakra}])
                      (put! EVENTCHANNEL [:play-tone]))}
         (:location chakra)]))]])

(defn controls []
  [:div#controls
   [:input.btn {:type "button"
                :value "Get Word"
                :style {:background-color (:color (:chakra @app-state))}
                :on-click #(get-word)}]
   [:input.field {:type "input"
                  :name "word"
                  :value (:word @app-state)
                  :on-change #(println "something")}]
   ]
  )

(defn main []
  [:div#main 
   [controls]
   [:div#word
    [:a {:href (apply str
                      "http://google.com/search?q="
                      (:word @app-state)
                      "+conspiracy")
         :target "_blank"}
     [:p (:word @app-state)]
     [:span {:style {:color (:color (:chakra @app-state))}}"conspiracy >>"]]
    [:ul {:style {:color (:color (:chakra @app-state))}}
     [:li "chakra: " (:number (:chakra @app-state))]
     [:li "frequency: " (:freq (:chakra @app-state))]
     [:li "location: " (:location (:chakra @app-state))]]]
   (display-chakras EVENTCHANNEL)])

(r/render-component [main] (. js/document (getElementById "app")))

(defn on-js-reload [])
