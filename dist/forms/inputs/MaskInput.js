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
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var formik_1 = require("formik");
var react_input_mask_1 = __importDefault(require("react-input-mask"));
function MaskInput(props) {
    var _a = (0, formik_1.useField)(props), field = _a[0], meta = _a[1];
    var label = props.label, mask = props.mask, type = props.type;
    return ((0, jsx_runtime_1.jsx)(react_input_mask_1.default, __assign({ mask: mask, maskChar: "", alwaysShowMask: false }, field, { children: function (inputProps) { return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, inputProps, { label: label, type: type, error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error, fullWidth: true }), void 0)); } }), void 0));
}
exports.default = MaskInput;
