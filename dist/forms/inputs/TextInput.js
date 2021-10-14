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
var jsx_runtime_1 = require("react/jsx-runtime");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var formik_1 = require("formik");
var react_debounce_input_1 = require("react-debounce-input");
function TextInput(props) {
    var _a, _b;
    var _c = (0, formik_1.useField)(props), field = _c[0], meta = _c[1];
    var formik = (0, formik_1.useFormikContext)();
    var inputProps = __assign(__assign({}, props), { debounce: undefined, hyperactive: undefined });
    var hyperactive = props.hyperactive, endAdornment = props.endAdornment;
    function handleChange(event) {
        event.target.name = props.name;
        field.onChange(event);
        if (hyperactive) {
            formik.submitForm();
        }
    }
    return props.debounce ? ((0, jsx_runtime_1.jsx)(react_debounce_input_1.DebounceInput, __assign({ minLength: 1, debounceTimeout: 500, element: TextField_1.default }, field, inputProps, { fullWidth: (_a = props.fullWidth) !== null && _a !== void 0 ? _a : true, onChange: handleChange, error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error, InputProps: {
            endAdornment: endAdornment,
            name: props.name,
        } }), void 0)) : ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, field, inputProps, { fullWidth: (_b = props.fullWidth) !== null && _b !== void 0 ? _b : true, onChange: handleChange, error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error, InputProps: {
            endAdornment: endAdornment,
        } }), void 0));
}
exports.default = TextInput;
