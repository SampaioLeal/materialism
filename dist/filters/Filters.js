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
exports.Filters = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var Refresh_1 = __importDefault(require("@mui/icons-material/Refresh"));
var material_1 = require("@mui/material");
var formik_1 = require("formik");
var react_1 = require("react");
var formatters_1 = require("../utils/formatters");
var FiltersModal_1 = require("../filters/FiltersModal");
var utils_1 = require("./utils");
var SmallButton = (0, material_1.styled)(material_1.Button)(function (_a) {
    var theme = _a.theme;
    return ({
        background: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        minWidth: 32,
        padding: 8,
        ":hover": {
            background: theme.palette.action.hover,
        },
    });
});
function FiltersComponent(_a) {
    var filters = _a.filters, listHook = _a.listHook;
    var _b = (0, react_1.useState)(false), isFiltersOpen = _b[0], setFiltersOpen = _b[1];
    var anchorRef = (0, react_1.useRef)(null);
    var initialValues = (0, react_1.useMemo)(function () { return (0, utils_1.buildInitialValues)(filters); }, [filters]);
    function handleSubmit(values) {
        var newFilters = {};
        filters.forEach(function (filter) {
            if (values[filter.field] !== "")
                newFilters[filter.field] = (0, utils_1.getFilterValue)(filter, values);
        });
        listHook.changeFilters(newFilters);
        handleCloseFilters();
    }
    function handleDelete(key, formik) {
        return function () {
            formik.setFieldValue(key, "");
            formik.submitForm();
        };
    }
    function handleReset(formik) {
        return function () {
            formik.resetForm();
            formik.submitForm();
        };
    }
    function handleToggleFilters() {
        setFiltersOpen(function (prevOpen) { return !prevOpen; });
    }
    function handleCloseFilters(event) {
        if (anchorRef.current &&
            anchorRef.current.contains(event === null || event === void 0 ? void 0 : event.target)) {
            return;
        }
        setFiltersOpen(false);
    }
    var prevOpen = (0, react_1.useRef)(isFiltersOpen);
    (0, react_1.useEffect)(function () {
        if (prevOpen.current === true && isFiltersOpen === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = isFiltersOpen;
    }, [isFiltersOpen]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(formik_1.Formik, __assign({ initialValues: initialValues, onSubmit: handleSubmit }, { children: function (formik) { return ((0, jsx_runtime_1.jsxs)(formik_1.Form, { children: [(0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: true }, { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, spacing: 2 }, { children: [Object.entries(listHook.filters).map(function (_a) {
                                            var key = _a[0], value = _a[1];
                                            var title = value;
                                            if (key === "sort")
                                                return;
                                            if (value instanceof Date)
                                                title = (0, formatters_1.formatDate)(value);
                                            return ((0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(material_1.Chip, { label: String(title), onDelete: handleDelete(key, formik) }, void 0) }), key));
                                        }), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true }, { children: (0, jsx_runtime_1.jsxs)(material_1.Button, __assign({ size: "small", onClick: handleToggleFilters, ref: anchorRef }, { children: [(0, jsx_runtime_1.jsx)(Add_1.default, {}, void 0), "Adicionar filtro"] }), void 0) }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(SmallButton, __assign({ variant: "contained", onClick: handleReset(formik) }, { children: (0, jsx_runtime_1.jsx)(Delete_1.default, { fontSize: "small" }, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(SmallButton, __assign({ variant: "contained", onClick: listHook.refresh }, { children: (0, jsx_runtime_1.jsx)(Refresh_1.default, { fontSize: "small" }, void 0) }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(FiltersModal_1.FiltersModal, { state: isFiltersOpen, handleClose: handleCloseFilters, anchorEl: anchorRef.current, filters: filters }, void 0)] }, void 0)); } }), void 0) }, void 0));
}
exports.Filters = (0, react_1.memo)(FiltersComponent);
