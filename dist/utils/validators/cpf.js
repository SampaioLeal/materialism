"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCPF = void 0;
function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");
    var arr = [];
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/))
        return false;
    arr = cpf.split("");
    var validator = arr
        .filter(function (digit, index, array) { return index >= array.length - 2 && digit; })
        .map(function (el) { return +el; });
    var toValidate = function (pop) {
        return arr
            .filter(function (digit, index, array) { return index < array.length - pop && digit; })
            .map(function (el) { return +el; });
    };
    var rest = function (count, pop) {
        return ((toValidate(pop).reduce(function (soma, el, i) { return soma + el * (count - i); }, 0) *
            10) %
            11) %
            10;
    };
    return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
}
exports.validateCPF = validateCPF;
