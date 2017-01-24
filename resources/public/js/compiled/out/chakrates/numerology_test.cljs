(ns chakrates.numerology-test
  (:require [cljs.test :refer-macros [deftest is]]
            [chakrates.numerology :as n]))

(deftest converts-letter-to-number
  (is (= [1] (n/letters-to-numbers "a"))))

(deftest converts-letters-to-numbers
  (is (= [1 2 3] (n/letters-to-numbers "abc"))))

(deftest works-for-high-numbers
  (is (= [24 25 26] (n/letters-to-numbers "xyz"))))

(deftest converts-letter-to-one-number
  (is (= 1 (n/word-to-number "a"))))

(deftest converts-letters-to-one-number
  (is (= 123 (n/word-to-number "abc"))))

(deftest works-for-double-digits
  (is (= 242526 (n/word-to-number "xyz"))))

(deftest returns-value-for-very-long-word
  (is (not= 0 (n/word-to-number "veryveryverylongwordthatwegot"))))

(deftest works-for-long-words
  (is (= 1.2345678910111212e+22 (n/word-to-number "abcdefghijklmnop"))))

(deftest converts-single-number-to-digit
  (is (= 1 (n/number-to-digit 1))))

(deftest converts-two-place-number-to-digit
  (is (= 3 (n/number-to-digit 12))))

(deftest works-for-long-numbers
  (is (= 9 (n/number-to-digit 999999999999999))))

(deftest calculates-numerology-for-letter
  (is (= 1 (n/word-to-numerology "a"))))

(deftest calculates-numerology-for-short-word
  (is (= 6 (n/word-to-numerology "abc"))))

(deftest calculates-numerology-for-weirdly-cased-words
  (is (= 6 (n/word-to-numerology "WeirDcAse"))))

(deftest calculates-numerology-for-long-word
  (is (= 4 (n/word-to-numerology "veryverylongwordthatwegot"))))
