(ns chakrates.numerology)

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
