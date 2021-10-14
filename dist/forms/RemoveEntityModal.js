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
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
function RemoveEntityModal(_a) {
    var open = _a.open, listHook = _a.listHook, handleClose = _a.handleClose;
    function handleRemove() {
        listHook.removeSelected();
        handleClose();
    }
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, __assign({ open: open, onClose: handleClose }, { children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Deseja remover o item selecionado?" }, void 0), (0, jsx_runtime_1.jsx)(material_1.DialogContent, {}, void 0), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, __assign({ onClick: handleClose, color: "primary", variant: "outlined" }, { children: "Cancelar" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ onClick: handleRemove, color: "primary", autoFocus: true, variant: "contained" }, { children: "Remover" }), void 0)] }, void 0)] }), void 0));
}
exports.default = RemoveEntityModal;
