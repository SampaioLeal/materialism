"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Pagination_1 = __importDefault(require("@mui/material/Pagination"));
var x_data_grid_1 = require("@mui/x-data-grid");
function MuiPagination() {
    var _a = (0, x_data_grid_1.useGridSlotComponentProps)(), state = _a.state, apiRef = _a.apiRef;
    return ((0, jsx_runtime_1.jsx)(Pagination_1.default, { sx: { display: "flex" }, color: "primary", count: state.pagination.pageCount, page: state.pagination.page + 1, onChange: function (event, value) { return apiRef.current.setPage(value - 1); } }, void 0));
}
exports.default = MuiPagination;
