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
var AccountCircle_1 = __importDefault(require("@mui/icons-material/AccountCircle"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var formik_1 = require("formik");
function EmailInput(props) {
    var _a = (0, formik_1.useField)(props), field = _a[0], meta = _a[1];
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({ fullWidth: true }, field, props, { error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error, InputProps: {
            startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, __assign({ position: "start" }, { children: (0, jsx_runtime_1.jsx)(AccountCircle_1.default, {}, void 0) }), void 0)),
        } }), void 0));
}
exports.default = EmailInput;
