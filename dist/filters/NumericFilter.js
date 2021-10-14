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
exports.NumericFilter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var NumericInput_1 = __importDefault(require("../forms/inputs/NumericInput"));
var GridActions_1 = require("../components/GridActions");
var TabPanel_1 = require("../components/TabPanel");
function NumericFilter(_a) {
    var name = _a.name, precision = _a.precision, decimalChar = _a.decimalChar, thousandChar = _a.thousandChar, activeTab = _a.activeTab, index = _a.index;
    return ((0, jsx_runtime_1.jsx)(TabPanel_1.TabPanel, __assign({ value: activeTab, index: index }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ p: 2 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, { children: "Busque por um determinado n\u00FAmero" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(NumericInput_1.default, { name: name, label: "Pesquisar", precision: precision, decimalChar: decimalChar, thousandChar: thousandChar }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(GridActions_1.GridActions, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ type: "submit", variant: "contained" }, { children: "Aplicar" }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0));
}
exports.NumericFilter = NumericFilter;
