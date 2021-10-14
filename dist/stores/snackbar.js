"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var SnackbarStore = /** @class */ (function () {
    function SnackbarStore() {
        this.isOpen = false;
        this.message = "";
        this.severity = "info";
        (0, mobx_1.makeAutoObservable)(this, {}, { autoBind: true });
    }
    SnackbarStore.prototype.alert = function (message, severity) {
        var _this = this;
        setTimeout(function () {
            _this.changeSnackbar(message, severity);
            _this.openSnackbar();
        }, 200);
    };
    SnackbarStore.prototype.resetSnackbar = function () {
        this.changeSnackbar("", "info");
    };
    SnackbarStore.prototype.changeSnackbar = function (message, severity) {
        this.message = message;
        this.severity = severity;
    };
    SnackbarStore.prototype.openSnackbar = function () {
        this.isOpen = true;
    };
    SnackbarStore.prototype.closeSnackbar = function () {
        this.isOpen = false;
    };
    return SnackbarStore;
}());
var snackbarStore = new SnackbarStore();
exports.default = snackbarStore;
