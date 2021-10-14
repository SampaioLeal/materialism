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
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var material_1 = require("@mui/material");
var formik_1 = require("formik");
var react_1 = require("react");
function FileUploadInput(props) {
    var _a, _b;
    var _c = (0, formik_1.useField)(props), field = _c[0], meta = _c[1], helpers = _c[2];
    var inputRef = (0, react_1.useRef)(null);
    function getImageName() {
        var _a;
        var urlArray = (_a = field.value) === null || _a === void 0 ? void 0 : _a.split("/");
        if (urlArray === null || urlArray === void 0 ? void 0 : urlArray.length)
            return urlArray[urlArray.length - 1];
        else
            return "";
    }
    function handleChange(event) {
        var files = event.target.files;
        if (files === null || files === void 0 ? void 0 : files.length)
            helpers.setValue(files[0]);
    }
    function removeImage() {
        helpers.setValue(null);
        inputRef.current && (inputRef.current.value = "");
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ display: "flex", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)("input", { onChange: handleChange, style: {
                            display: "none",
                        }, id: props.name, type: "file", accept: props.accept, ref: inputRef }, void 0), (0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: props.name }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ variant: "outlined", color: "primary", component: "span" }, { children: props.label }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ sx: {
                            paddingLeft: 2,
                        } }, { children: (_b = (_a = field.value) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : getImageName() }), void 0), field.value && ((0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: "Apagar imagem" }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ onClick: removeImage, size: "small", style: { marginLeft: 8 } }, { children: (0, jsx_runtime_1.jsx)(Close_1.default, {}, void 0) }), void 0) }), void 0))] }), void 0), (0, jsx_runtime_1.jsx)(material_1.FormHelperText, __assign({ error: meta.touched && Boolean(meta.error) }, { children: meta.touched && meta.error }), void 0)] }, void 0));
}
exports.default = FileUploadInput;
