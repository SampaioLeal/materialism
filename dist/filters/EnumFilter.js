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
exports.EnumFilter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var CheckboxGroupInput_1 = __importDefault(require("../forms/inputs/CheckboxGroupInput"));
var GridActions_1 = require("../components/GridActions");
var TabPanel_1 = require("../components/TabPanel");
function EnumFilter(_a) {
    var name = _a.name, activeTab = _a.activeTab, index = _a.index, options = _a.options;
    var checkboxOptions = (0, react_1.useMemo)(function () {
        return options.map(function (option) { return ({
            label: option.title,
            value: option.value,
        }); });
    }, [options]);
    return ((0, jsx_runtime_1.jsx)(TabPanel_1.TabPanel, __assign({ value: activeTab, index: index }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ p: 2 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(CheckboxGroupInput_1.default, { name: name, label: "Escolha as op\u00E7\u00F5es", options: checkboxOptions }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(GridActions_1.GridActions, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ type: "submit", variant: "contained" }, { children: "Aplicar" }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0));
}
exports.EnumFilter = EnumFilter;
