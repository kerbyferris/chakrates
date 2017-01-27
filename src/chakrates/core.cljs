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

(defonce API_KEY "1e82d20adc034891c000801b43b0a7f94034ecc73d79a70bb")
(defonce WORD_API "https://api.wordnik.com/v4/words.json/randomWords")

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

(defn handler [[response]]
  (let [word (:word response)]
    (put! EVENTCHANNEL [:update-word {:active-word word}])
    (put! EVENTCHANNEL [:play-tone])))

(defn get-word []
  (GET WORD_API {:response-format :json
                 :params {:limit 1
                          :hasDictonaryDef true
                          :api_key API_KEY}
                 :keywords? true
                 :handler handler}))

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

(defn atom-input [value]
  [:input.field {:type "text"
           :value @value
           :on-change #(do (reset! value (-> % .-target .-value))
                           (if (< 0 (count @value))
                             (do (put! EVENTCHANNEL [:update-word {:active-word @value}])
                                 (put! EVENTCHANNEL [:play-tone]))))}])

(defn input-field []
  (let [val (r/atom "")]
    (fn []
       [atom-input val])))

(defn controls []
  [:div#controls
   [:input.btn {:type "image"
                :src "./images/twisted_rightwards_arrows.png"
                :style {:background-color (:color (:chakra @app-state))}
                :on-click #(get-word)}]
   [input-field]
   [:input.btn {:type "image"
                :src "./images/clockwise_rightwards_and_leftwards_open_circle_arrows.png"
                :style {:background-color (:color (:chakra @app-state))}
                :on-click #(put! EVENTCHANNEL [:play-tone])}]
   ])

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
