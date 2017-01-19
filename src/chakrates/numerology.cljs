(ns chakrates.numerology
  (:require [clojure.string :as str]))

(defonce alphanumeric-map
  (let [charset-lowercase (map char (range 97 123))
        alphabet-as-numbers (range 1 27)]
    (zipmap
      (map keyword charset-lowercase) alphabet-as-numbers)))

(defn letters-to-numbers [word]
  (map alphanumeric-map (map keyword (seq (str/lower-case word)))))

(defn word-to-number [word]
  (long (apply str (letters-to-numbers word))))

(defn add-digits [number]
  (apply + (map int (seq (str number)))))

(defn number-to-digit [number]
  (loop [n number]
    (if (= 1 (count (str n)))
      n (recur (add-digits n)))))

(defn word-to-numerology [word]
  (number-to-digit (word-to-number word)))
