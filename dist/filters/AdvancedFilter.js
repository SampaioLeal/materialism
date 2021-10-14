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
exports.AdvancedFilter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var FilterAlt_1 = __importDefault(require("@mui/icons-material/FilterAlt"));
var FilterAltOutlined_1 = __importDefault(require("@mui/icons-material/FilterAltOutlined"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var material_1 = require("@mui/material");
var formik_1 = require("formik");
var react_1 = require("react");
var Title = (0, material_1.styled)(Typography_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.h5.fontSize,
    });
});
function AdvancedFilter(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var formik = (0, formik_1.useFormikContext)();
    var hasFilters = !!Object.values(formik.values).some(function (value) { return !!value; });
    function openDrawer() {
        setIsOpen(true);
    }
    function closeDrawer() {
        setIsOpen(false);
    }
    function clearFilters() {
        formik.resetForm();
        formik.submitForm();
    }
    function submit(values) {
        formik.setValues(values);
        formik.submitForm();
        closeDrawer();
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ title: "Filtros" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ onClick: openDrawer, size: "large" }, { children: hasFilters ? (0, jsx_runtime_1.jsx)(FilterAlt_1.default, {}, void 0) : (0, jsx_runtime_1.jsx)(FilterAltOutlined_1.default, {}, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Drawer_1.default, __assign({ anchor: "right", open: isOpen, onClose: closeDrawer, PaperProps: {
                    sx: {
                        padding: 2,
                        minWidth: 350,
                    },
                } }, { children: (0, jsx_runtime_1.jsx)(formik_1.Formik, __assign({ initialValues: {}, onSubmit: submit }, { children: function () { return ((0, jsx_runtime_1.jsxs)(formik_1.Form, { children: [(0, jsx_runtime_1.jsxs)(Grid_1.default, __assign({ container: true, spacing: 2, alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, __assign({ item: true, xs: true }, { children: (0, jsx_runtime_1.jsx)(Title, { children: "Filtros" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, __assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ title: "Fechar" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ onClick: closeDrawer, size: "large" }, { children: (0, jsx_runtime_1.jsx)(Close_1.default, {}, void 0) }), void 0) }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Box_1.default, __assign({ marginY: 2 }, { children: children }), void 0), (0, jsx_runtime_1.jsxs)(Grid_1.default, __assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, __assign({ item: true, xs: true }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ variant: "outlined", color: "primary", fullWidth: true, onClick: clearFilters }, { children: "Limpar" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, __assign({ item: true, xs: true }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ type: "submit", variant: "contained", color: "primary", fullWidth: true }, { children: "Buscar" }), void 0) }), void 0)] }), void 0)] }, void 0)); } }), void 0) }), void 0)] }, void 0));
}
exports.AdvancedFilter = AdvancedFilter;
