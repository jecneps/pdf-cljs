goog.provide('test.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
if((typeof test !== 'undefined') && (typeof test.core !== 'undefined') && (typeof test.core.root !== 'undefined')){
} else {
test.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("root"));
}
test.core.start_page = (function test$core$start_page(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","page-start","pdf/page-start",874111316)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pdf","pdf-load-request","pdf/pdf-load-request",-1136550793),"resources/test.pdf"], null));
});
test.core.init = (function test$core$init(){
return test.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdf_cljs.core.pdf_component], null)));
});
test.core.re_render = (function test$core$re_render(){
return test.core.init();
});
test.core.init_BANG_ = (function test$core$init_BANG_(){
test.core.start_page();

return test.core.init();
});

//# sourceMappingURL=test.core.js.map
