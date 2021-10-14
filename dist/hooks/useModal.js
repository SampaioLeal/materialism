"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useModal() {
    var _a = (0, react_1.useState)(false), state = _a[0], setState = _a[1];
    function open() {
        setState(true);
    }
    function close() {
        setState(false);
    }
    return { state: state, open: open, close: close };
}
exports.default = useModal;
