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
exports.AddButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var Fab_1 = __importDefault(require("@mui/material/Fab"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var router_1 = require("next/router");
var FAB_MARGIN = 8 * 3;
function AddButton(props) {
    var router = (0, router_1.useRouter)();
    function handleClick() {
        router.push(router.pathname + "/new");
    }
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ position: "fixed", bottom: FAB_MARGIN, right: FAB_MARGIN }, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({ title: "Adicionar" }, { children: (0, jsx_runtime_1.jsx)(Fab_1.default, __assign({ "data-cy": props["data-cy"], onClick: handleClick, color: "primary", "aria-label": "add" }, { children: (0, jsx_runtime_1.jsx)(Add_1.default, {}, void 0) }), void 0) }), void 0) }), void 0));
}
exports.AddButton = AddButton;
