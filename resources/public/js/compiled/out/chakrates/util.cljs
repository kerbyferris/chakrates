(ns chakrates.util
  (:require [chakrates.data :as data]))

(enable-console-print!)

(defn get-chakra-by-number [number]
  (first (filter #(= number (:number %)) data/chakras)))
