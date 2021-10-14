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
var PAGE_SIZE = 10;
function useTableQuery(config) {
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];
    var _b = (0, react_1.useState)(config.page || 0), page = _b[0], setPage = _b[1];
    var _c = (0, react_1.useState)(0), count = _c[0], setCount = _c[1];
    var _d = (0, react_1.useState)({}), filters = _d[0], setFilters = _d[1];
    var _e = (0, react_1.useState)(true), isLoading = _e[0], setIsLoading = _e[1];
    var _f = (0, react_1.useState)(""), selected = _f[0], setSelected = _f[1];
    var api = config.api;
    function changePage(page) {
        setPage(page);
    }
    function changeFilters(values) {
        setFilters(values);
        setPage(0);
    }
    function removeSelected() {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api.delete(config.path + "/" + selected)];
                    case 1:
                        _a.sent();
                        fetch();
                        snackbar_1.default.alert("Removido com sucesso.", "success");
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        snackbar_1.default.alert("Ocorreu um erro ao remover! Tente novamente.", "error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function refresh() {
        fetch();
    }
    function fetch() {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, api.get(config.path, {
                                params: __assign({ limit: PAGE_SIZE, skip: PAGE_SIZE * page }, filters),
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.status === 200) {
                            setCount(response.data.totalCount);
                            setData(response.data.data);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    (0, react_1.useEffect)(function () {
        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, filters]);
    return {
        data: data,
        page: page,
        count: count,
        filters: filters,
        isLoading: isLoading,
        selected: selected,
        refresh: refresh,
        changePage: changePage,
        changeFilters: changeFilters,
        setSelected: setSelected,
        removeSelected: removeSelected,
    };
}
exports.default = useTableQuery;
