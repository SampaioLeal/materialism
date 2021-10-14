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
var formik_1 = require("formik");
var material_ui_numeric_input_1 = __importDefault(require("material-ui-numeric-input"));
function NumericInput(props) {
    var _a, _b, _c;
    var _d = (0, formik_1.useField)(props), field = _d[0], meta = _d[1], helper = _d[2];
    return ((0, jsx_runtime_1.jsx)(material_ui_numeric_input_1.default, __assign({ thousandChar: (_a = props.thousandChar) !== null && _a !== void 0 ? _a : ".", decimalChar: (_b = props.decimalChar) !== null && _b !== void 0 ? _b : ",", precision: (_c = props.precision) !== null && _c !== void 0 ? _c : 2, variant: "outlined", color: "primary", error: meta.touched && Boolean(meta.error), helperText: meta.touched ? meta.error : undefined }, field, props, { onChange: function (number) {
            helper.setValue(number);
        } }), void 0));
}
exports.default = NumericInput;
