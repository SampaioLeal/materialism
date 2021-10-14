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
exports.PageWrap = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Container_1 = __importDefault(require("@mui/material/Container"));
var mobx_react_lite_1 = require("mobx-react-lite");
function PageWrapComponent(_a) {
    var children = _a.children, tabs = _a.tabs;
    return ((0, jsx_runtime_1.jsx)(Container_1.default, __assign({ maxWidth: "xl", sx: {
            marginTop: tabs ? 16 : 10,
        } }, { children: children }), void 0));
}
exports.PageWrap = (0, mobx_react_lite_1.observer)(PageWrapComponent);
