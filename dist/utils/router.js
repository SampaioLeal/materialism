"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGoBack = void 0;
function handleGoBack(router) {
    var newRoute = router.pathname.split("/");
    newRoute.pop();
    router.push(newRoute.join("/"));
}
exports.handleGoBack = handleGoBack;
