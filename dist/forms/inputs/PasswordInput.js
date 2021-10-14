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
var Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
var Visibility_1 = __importDefault(require("@mui/icons-material/Visibility"));
var VisibilityOff_1 = __importDefault(require("@mui/icons-material/VisibilityOff"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var formik_1 = require("formik");
var react_1 = require("react");
function PasswordInput(_a) {
    var noIcon = _a.noIcon, props = __rest(_a, ["noIcon"]);
    var _b = (0, formik_1.useField)(props), field = _b[0], meta = _b[1];
    var _c = (0, react_1.useState)(false), showPassword = _c[0], setShowPassword = _c[1];
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({ fullWidth: true }, field, props, { error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error, type: showPassword ? "text" : "password", InputProps: {
            startAdornment: !noIcon ? ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, __assign({ position: "start" }, { children: (0, jsx_runtime_1.jsx)(Lock_1.default, {}, void 0) }), void 0)) : undefined,
            endAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, __assign({ position: "end" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ onClick: handleShowPassword, edge: "end", size: "large" }, { children: showPassword ? ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ title: "Ocultar" }, { children: (0, jsx_runtime_1.jsx)(Visibility_1.default, {}, void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ title: "Exibir" }, { children: (0, jsx_runtime_1.jsx)(VisibilityOff_1.default, {}, void 0) }), void 0)) }), void 0) }), void 0)),
        } }), void 0));
}
exports.default = PasswordInput;
