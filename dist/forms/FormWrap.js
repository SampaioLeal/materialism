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
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var formik_1 = require("formik");
var BackButton_1 = __importDefault(require("./inputs/BackButton"));
var SubmitButton_1 = __importDefault(require("./inputs/SubmitButton"));
function FormWrap(_a) {
    var children = _a.children, initialValues = _a.initialValues, validationSchema = _a.validationSchema, onSubmit = _a.onSubmit;
    return ((0, jsx_runtime_1.jsx)(formik_1.Formik, __assign({ enableReinitialize: true, initialValues: initialValues, onSubmit: onSubmit, validationSchema: validationSchema }, { children: function () { return ((0, jsx_runtime_1.jsx)(Paper_1.default, __assign({ sx: { padding: 2, display: "flex" } }, { children: (0, jsx_runtime_1.jsxs)(formik_1.Form, __assign({ style: { width: "100%" } }, { children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, __assign({ sx: { padding: 0, marginTop: 2 } }, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, { text: "Voltar" }, void 0), (0, jsx_runtime_1.jsx)(SubmitButton_1.default, { "data-cy": "save", text: "Salvar" }, void 0)] }), void 0)] }), void 0) }), void 0)); } }), void 0));
}
exports.default = FormWrap;
