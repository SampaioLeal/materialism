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
exports.SearchInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var InputBase_1 = __importDefault(require("@mui/material/InputBase"));
var material_1 = require("@mui/material");
var CustomInput = (0, material_1.styled)(InputBase_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        background: theme.palette.background.paper,
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        maxWidth: 450,
        // border: "solid 1px",
        // borderColor: theme.palette.primary.main,
        boxShadow: theme.shadows[2],
    });
});
function SearchInput(props) {
    return ((0, jsx_runtime_1.jsx)(CustomInput, { fullWidth: true, placeholder: "Pesquisar", endAdornment: (0, jsx_runtime_1.jsx)(InputAdornment_1.default, __assign({ position: "end" }, { children: (0, jsx_runtime_1.jsx)(Search_1.default, {}, void 0) }), void 0), onChange: props.onChange }, void 0));
}
exports.SearchInput = SearchInput;
