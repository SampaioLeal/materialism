"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCPF = exports.formatDate = void 0;
function formatDate(date) {
    if (date) {
        return new Date(date).toLocaleString("pt-BR").split(" ")[0];
    }
    return "Data não informada";
}
exports.formatDate = formatDate;
function formatCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function (regex, argumento1, argumento2, argumento3, argumento4) {
        return argumento1 + "." + argumento2 + "." + argumento3 + "-" + argumento4;
    });
}
exports.formatCPF = formatCPF;
