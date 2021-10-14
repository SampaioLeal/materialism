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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
var formik_1 = require("formik");
var CheckboxInput_1 = __importDefault(require("./CheckboxInput"));
function CheckboxGroupInput(_a) {
    var options = _a.options, label = _a.label, props = __rest(_a, ["options", "label"]);
    var _b = (0, formik_1.useField)(props), meta = _b[1];
    return ((0, jsx_runtime_1.jsxs)(FormControl_1.default, __assign({ component: "fieldset" }, { children: [(0, jsx_runtime_1.jsx)(FormLabel_1.default, __assign({ component: "legend" }, { children: label }), void 0), (0, jsx_runtime_1.jsx)(FormGroup_1.default, { children: options.map(function (option) {
                    return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(CheckboxInput_1.default, { name: props.name + "." + option.value }, void 0), label: option.label }, props.name + "." + option.value));
                }) }, void 0), (0, jsx_runtime_1.jsx)(FormHelperText_1.default, { children: meta.touched && meta.error }, void 0)] }), void 0));
}
exports.default = CheckboxGroupInput;
