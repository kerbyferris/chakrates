(ns chakrates.test-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [chakrates.numerology-test]
            [chakrates.util-test]))

(enable-console-print!)

(doo-tests 'chakrates.numerology-test
           'chakrates.util-test)
