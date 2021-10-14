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
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Select_1 = __importDefault(require("@mui/material/Select"));
var formik_1 = require("formik");
function SelectInput(props) {
    var _a;
    var _b = (0, formik_1.useField)(props), field = _b[0], meta = _b[1];
    var label = props.label, options = props.options;
    return ((0, jsx_runtime_1.jsxs)(FormControl_1.default, __assign({ fullWidth: (_a = props.fullWidth) !== null && _a !== void 0 ? _a : true, size: props.size, variant: "outlined", error: meta.touched && Boolean(meta.error) }, { children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, __assign({ id: "select" }, { children: label }), void 0), (0, jsx_runtime_1.jsxs)(Select_1.default, __assign({ labelId: "select" }, field, props, { children: [(0, jsx_runtime_1.jsx)(MenuItem_1.default, __assign({ value: "" }, { children: (0, jsx_runtime_1.jsx)("em", { children: "Selecione uma op\u00E7\u00E3o" }, void 0) }), void 0), options.map(function (option) {
                        return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, __assign({ value: option.value }, { children: option.label }), option.value));
                    })] }), void 0), (0, jsx_runtime_1.jsx)(FormHelperText_1.default, { children: meta.touched && meta.error }, void 0)] }), void 0));
}
exports.default = SelectInput;
