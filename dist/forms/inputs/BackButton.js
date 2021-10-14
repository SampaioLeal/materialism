"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = __importDefault(require("@mui/material/Button"));
var router_1 = require("next/router");
function BackButton(_a) {
    var text = _a.text;
    var router = (0, router_1.useRouter)();
    function handleGoBack() {
        var listPath = router.pathname.split("/");
        listPath.pop();
        router.push(listPath.join("/"));
    }
    return ((0, jsx_runtime_1.jsx)(Button_1.default, __assign({ variant: "outlined", color: "primary", onClick: handleGoBack }, { children: text }), void 0));
}
exports.default = BackButton;
