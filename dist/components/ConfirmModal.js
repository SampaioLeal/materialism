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
exports.ConfirmModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var lab_1 = require("@mui/lab");
var material_1 = require("@mui/material");
var image_1 = __importDefault(require("next/image"));
function ConfirmModal(props) {
    var open = props.open, handleClose = props.handleClose, width = props.width, image = props.image, title = props.title, description = props.description, confirmLabel = props.confirmLabel, confirmLoading = props.confirmLoading, cancelLabel = props.cancelLabel, onConfirm = props.onConfirm;
    return ((0, jsx_runtime_1.jsx)(material_1.Dialog, __assign({ open: open, onClose: handleClose }, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContent, __assign({ sx: { width: width !== null && width !== void 0 ? width : 400 } }, { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, spacing: 2 }, { children: [image && ((0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12, sx: { display: "flex", justifyContent: "center" } }, { children: (0, jsx_runtime_1.jsx)(image_1.default, { height: image.height, width: image.width, src: image.src, alt: image.alt }, void 0) }), void 0)), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ align: "center", fontWeight: "bold", variant: "h5" }, { children: title }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ align: "center" }, { children: description }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 6 }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ onClick: handleClose, variant: "outlined", fullWidth: true }, { children: cancelLabel }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 6 }, { children: (0, jsx_runtime_1.jsx)(lab_1.LoadingButton, __assign({ loading: confirmLoading, loadingPosition: "start", onClick: onConfirm, color: "primary", variant: "contained", fullWidth: true }, { children: confirmLabel }), void 0) }), void 0)] }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0));
}
exports.ConfirmModal = ConfirmModal;
