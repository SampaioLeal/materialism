"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var snackbar_1 = __importDefault(require("../stores/snackbar"));
// TODO: use mobx for entities management
function useEntity(config) {
    var _a = (0, react_1.useState)(null), data = _a[0], setData = _a[1];
    var _b = (0, react_1.useState)([]), list = _b[0], setList = _b[1];
    var api = config.api;
    function catchError(message, severity) {
        if (message === void 0) { message = "Ocorreu um erro ao salvar! Tente novamente."; }
        if (severity === void 0) { severity = "error"; }
        snackbar_1.default.alert(message, severity);
    }
    function positiveFeedback() {
        snackbar_1.default.alert("Salvo com sucesso!", "success");
    }
    function getAll(params) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api.get(config.path, {
                                params: params,
                            })];
                    case 1:
                        response = _a.sent();
                        setList(response.data.data);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        snackbar_1.default.alert("Ocorreu um erro ao consultar os dados! Tente novamente.", "error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function get() {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api.get(config.path + "/" + config.id)];
                    case 1:
                        response = _a.sent();
                        setData(response.data);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        snackbar_1.default.alert("Ocorreu um erro ao consultar os dados! Tente novamente.", "error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function getById(id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api.get(config.path + "/" + id)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_3 = _a.sent();
                        snackbar_1.default.alert("Ocorreu um erro ao consultar os dados! Tente novamente.", "error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function create(data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api.post(config.path, data, options)];
                    case 1:
                        response = _a.sent();
                        positiveFeedback();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_4 = _a.sent();
                        catchError(err_4.response.data.error);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function edit(id, data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api.patch(config.path + "/" + id, data, options)];
                    case 1:
                        response = _a.sent();
                        positiveFeedback();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_5 = _a.sent();
                        catchError(err_5.response.data.error);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    (0, react_1.useEffect)(function () {
        if (config.id)
            get();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config.id]);
    return { data: data, list: list, get: get, getAll: getAll, getById: getById, create: create, edit: edit };
}
exports.default = useEntity;
