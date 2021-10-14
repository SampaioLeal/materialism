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
exports.Snackbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Alert_1 = __importDefault(require("@mui/material/Alert"));
var Snackbar_1 = __importDefault(require("@mui/material/Snackbar"));
var mobx_react_lite_1 = require("mobx-react-lite");
var snackbar_1 = __importDefault(require("../stores/snackbar"));
function SnackbarComponent() {
    return ((0, jsx_runtime_1.jsx)(Snackbar_1.default, __assign({ anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
        }, open: snackbar_1.default.isOpen, autoHideDuration: 6000, onClose: snackbar_1.default.closeSnackbar }, { children: (0, jsx_runtime_1.jsx)(Alert_1.default, __assign({ onClose: snackbar_1.default.closeSnackbar, severity: snackbar_1.default.severity, variant: "filled" }, { children: snackbar_1.default.message }), void 0) }), void 0));
}
exports.Snackbar = (0, mobx_react_lite_1.observer)(SnackbarComponent);
