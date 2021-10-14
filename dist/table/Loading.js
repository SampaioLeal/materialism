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
var LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
var x_data_grid_1 = require("@mui/x-data-grid");
function MuiLoading() {
    return ((0, jsx_runtime_1.jsx)(x_data_grid_1.GridOverlay, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: { position: "absolute", top: 0, width: "100%" } }, { children: (0, jsx_runtime_1.jsx)(LinearProgress_1.default, {}, void 0) }), void 0) }, void 0));
}
exports.default = MuiLoading;
