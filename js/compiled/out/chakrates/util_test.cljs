(ns chakrates.util-test
  (:require [cljs.test :refer-macros [deftest is]]
            [chakrates.util :as util]
            [chakrates.data :as data]))


(deftest gets-last-chakra-by-number
  (is (= (last data/chakras) (util/get-chakra-by-number 1))))

(deftest gets-first-chakra-by-number
  (is (= (first data/chakras) (util/get-chakra-by-number 9))))
