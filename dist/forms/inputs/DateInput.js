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
var DatePicker_1 = __importDefault(require("@mui/lab/DatePicker"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var formik_1 = require("formik");
function DateInput(props) {
    var _a = (0, formik_1.useField)(props), field = _a[0], meta = _a[1], helpers = _a[2];
    var label = props.label;
    function handleChange(date) {
        helpers.setValue(date);
    }
    function renderIconButton(params) {
        var _a;
        var endAdornment = (_a = params.InputProps) === null || _a === void 0 ? void 0 : _a.endAdornment;
        if (endAdornment) {
            return ((0, jsx_runtime_1.jsx)(material_2.Tooltip, __assign({ followCursor: true, title: "Selecionar data" }, { children: endAdornment }), void 0));
        }
        else {
            return null;
        }
    }
    return ((0, jsx_runtime_1.jsx)(DatePicker_1.default, { value: field.value ? new Date(field.value) : null, onChange: handleChange, showToolbar: true, cancelText: "Cancelar", label: label, renderInput: function (params) { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, __assign({}, params, { error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error, fullWidth: true, InputProps: __assign(__assign({}, params.InputProps), { endAdornment: renderIconButton(params) }) }), void 0) }, void 0)); } }, void 0));
}
exports.default = DateInput;
