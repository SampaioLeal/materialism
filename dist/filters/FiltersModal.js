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
exports.FiltersModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var CPFFilter_1 = require("./CPFFilter");
var DateFilter_1 = require("./DateFilter");
var EnumFilter_1 = require("./EnumFilter");
var NumericFilter_1 = require("./NumericFilter");
var TextFilter_1 = require("./TextFilter");
function FiltersModalComponent(_a) {
    var state = _a.state, anchorEl = _a.anchorEl, handleClose = _a.handleClose, filters = _a.filters;
    var _b = (0, react_1.useState)(0), activeTab = _b[0], setActiveTab = _b[1];
    function handleChangeTab(event, newValue) {
        setActiveTab(newValue);
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Popper, __assign({ open: state, anchorEl: anchorEl, role: undefined, placement: "bottom-start", transition: true, disablePortal: true, style: { zIndex: 10 } }, { children: function (_a) {
            var TransitionProps = _a.TransitionProps, placement = _a.placement;
            return ((0, jsx_runtime_1.jsx)(material_1.Grow, __assign({}, TransitionProps, { style: {
                    transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
                } }, { children: (0, jsx_runtime_1.jsx)(material_1.Paper, __assign({ elevation: 6 }, { children: (0, jsx_runtime_1.jsx)(material_1.ClickAwayListener, __assign({ onClickAway: handleClose }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ maxWidth: 700 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Tabs, __assign({ variant: "scrollable", value: activeTab, onChange: handleChangeTab, sx: {
                                        borderRight: 1,
                                        borderColor: "divider",
                                        maxHeight: 400,
                                    } }, { children: filters.map(function (filter) {
                                        return ((0, jsx_runtime_1.jsx)(material_1.Tab, { label: filter.title }, "tab-" + filter.field));
                                    }) }), void 0), filters.map(function (filter, index) {
                                    var key = "tabpanel-" + filter.field;
                                    switch (filter.type) {
                                        case "number":
                                            return ((0, jsx_runtime_1.jsx)(NumericFilter_1.NumericFilter, { name: filter.field, precision: 0, activeTab: activeTab, index: index }, key));
                                        case "date":
                                            return ((0, jsx_runtime_1.jsx)(DateFilter_1.DateFilter, { name: filter.field, activeTab: activeTab, index: index }, key));
                                        case "enum":
                                            return ((0, jsx_runtime_1.jsx)(EnumFilter_1.EnumFilter, { name: filter.field, activeTab: activeTab, index: index, options: filter.enums }, key));
                                        case "cpf":
                                            return ((0, jsx_runtime_1.jsx)(CPFFilter_1.CPFFilter, { name: filter.field, activeTab: activeTab, index: index }, key));
                                        default:
                                            return ((0, jsx_runtime_1.jsx)(TextFilter_1.TextFilter, { name: filter.field, activeTab: activeTab, index: index }, key));
                                    }
                                })] }), void 0) }), void 0) }), void 0) }), void 0));
        } }), void 0));
}
exports.FiltersModal = (0, react_1.memo)(FiltersModalComponent);
