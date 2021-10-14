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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var formik_1 = require("formik");
function AutoCompleteInput(props) {
    var _a = (0, formik_1.useField)(props), field = _a[0], helpers = _a[2];
    return ((0, jsx_runtime_1.jsx)(material_2.Autocomplete, { value: props.options.find(function (option) { return option.value === field.value; }) || null, onChange: function (_event, newValue) {
            helpers.setValue(newValue === null || newValue === void 0 ? void 0 : newValue.value);
        }, getOptionLabel: function (option) { return option.label; }, options: props.options, renderInput: function (params) { return ((0, jsx_runtime_1.jsx)(material_1.TextField, __assign({}, params, { label: props.label, size: props.size }), void 0)); } }, void 0));
}
exports.default = AutoCompleteInput;
