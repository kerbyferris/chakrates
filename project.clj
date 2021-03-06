(defproject chakrates "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [org.clojure/core.async "0.2.391"
                  :exclusions [org.clojure/tools.reader]]
                 [reagent "0.6.0"]
                 [lein-doo "0.1.7"]
                 [cljs-bach "0.2.0"]
                 [cljs-ajax "0.5.8"]]

  :plugins [[lein-figwheel "0.5.8"]
            [lein-doo "0.1.7"]
            [lein-cljsbuild "1.1.4" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src" "test"]

                :figwheel {:on-jsload "chakrates.core/on-js-reload"}

                :compiler {:main chakrates.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/chakrates.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "test"
                :source-paths ["src" "test"]
                :compiler {:main chakrates.test-runner
                           :output-to "resources/public/js/compiled/chakrates_test.js"
                           :optimizations :none}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/chakrates.js"
                           :main chakrates.core
                           :optimizations :advanced
                           :pretty-print false
                           :output-dir "resources/public/js/out"
                           }}]}

  :figwheel {:css-dirs ["resources/public/css"] ;; watch and update CSS
             }

  :profiles {:dev {:dependencies [[binaryage/devtools "0.8.2"]
                                  [figwheel-sidecar "0.5.8"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {; for nREPL dev you really need to limit output
                                  :init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
)
