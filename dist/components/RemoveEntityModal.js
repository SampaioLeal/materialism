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
exports.RemoveEntityModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
function RemoveEntityModal(_a) {
    var open = _a.open, listHook = _a.listHook, handleClose = _a.handleClose;
    function handleRemove() {
        listHook.removeSelected();
        handleClose();
    }
    return ((0, jsx_runtime_1.jsxs)(Dialog_1.default, __assign({ open: open, onClose: handleClose }, { children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: "Deseja remover o item selecionado?" }, void 0), (0, jsx_runtime_1.jsx)(DialogContent_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, __assign({ onClick: handleClose, color: "primary", variant: "outlined" }, { children: "Cancelar" }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ onClick: handleRemove, color: "primary", autoFocus: true, variant: "contained" }, { children: "Remover" }), void 0)] }, void 0)] }), void 0));
}
exports.RemoveEntityModal = RemoveEntityModal;
