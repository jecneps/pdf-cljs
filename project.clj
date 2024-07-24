(defproject pdf-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies
  [[org.clojure/core.match "1.1.0"]
   [thheller/shadow-cljs "2.23.3"]
   [org.clojure/clojure "1.10.0"]
   [org.clojure/clojurescript "1.11.60"]
   [reagent "1.2.0"]
   [re-frame "1.4.3"]
   [re-frame-utils "0.1.0"]
   [day8.re-frame/tracing      "0.6.2"]
   [day8.re-frame/re-frame-10x "1.6.0"]]
  :plugins [[lein-shadow "0.4.1"]]
  :shadow-cljs {:source-paths
                ["src"]



                :builds
                {:app {:target :browser
                       :output-dir "public/resources/js"
                       :asset-path "/resources/js"
                       :modules {:main {:entries [pdf-cljs.core]}}
                       :devtools {:http-root "public"
                                  :http-port 8280}}
                 :dev {:target :browser
                       :closure-defines {re-frame.trace.trace-enabled?        true
                                         day8.re-frame.tracing.trace-enabled? true}
                       :output-dir "public/resources/js"
                       :asset-path "/resources/js"
                       :infer-externs true
                       :modules {:main {:entries [test.core]
                                        :init-fn test.core/init!
                                        :prepend "var shadow_esm_import = function(x) { return import(x); };"}}
                       :devtools {:http-root "public"
                                  :http-port 8288
                                 ;;  :preloads [day8.re-frame-10x.preload]
                                  }}}})