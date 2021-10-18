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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var MoreVert_1 = __importDefault(require("@mui/icons-material/MoreVert"));
var material_1 = require("@mui/material");
var x_data_grid_1 = require("@mui/x-data-grid");
var react_1 = require("react");
var RemoveEntityModal_1 = require("../components/RemoveEntityModal");
var useModal_1 = __importDefault(require("../hooks/useModal"));
var Loading_1 = __importDefault(require("./Loading"));
var NoRowsOverlay_1 = __importDefault(require("./NoRowsOverlay"));
var Pagination_1 = __importDefault(require("./Pagination"));
var defaultPageSize = 10;
var localeText = {
    columnMenuUnsort: "Desfazer ordenação",
    columnMenuSortAsc: "Ordem Crescente",
    columnMenuSortDesc: "Ordem Decrescente",
    columnMenuFilter: "Filtrar",
    columnMenuHideColumn: "Ocultar",
    columnMenuShowColumns: "Exibir colunas",
    columnsPanelHideAllButton: "Ocultar tudo",
    columnsPanelShowAllButton: "Exibir tudo",
    columnsPanelTextFieldLabel: "Pesquisar coluna",
};
// TODO: fazer filtro avançado assim como o Datagrid Filter
// TODO: tipar actions
// TODO: usar genéricos
// TODO: remover outlined das células
function MuiTable(_a) {
    var columns = _a.columns, listHook = _a.listHook, actions = _a.actions, getRowId = _a.getRowId;
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var _c = (0, react_1.useState)([]), sortModel = _c[0], setSortModel = _c[1];
    var colsWithAction = (0, react_1.useRef)(__spreadArray([
        {
            field: "actions",
            editable: false,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            disableReorder: true,
            disableExport: true,
            headerName: "",
            width: 60,
            renderCell: renderActionbutton,
        }
    ], columns, true));
    var isMenuOpen = Boolean(anchorEl);
    var removeModal = (0, useModal_1.default)();
    var selectedRow = listHook.data.find(function (item) { return item.id === listHook.selected; });
    function openMenu(event, id) {
        listHook.setSelected(id);
        setAnchorEl(event.currentTarget);
    }
    function closeMenu() {
        setAnchorEl(null);
    }
    function handleRemove() {
        closeMenu();
        removeModal.open();
    }
    function handleSort(model) {
        setSortModel(model);
    }
    // TODO: arrumar renderização desnecessária disso
    function renderActionbutton(params) {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ onClick: function (event) { return openMenu(event, params.id); } }, { children: (0, jsx_runtime_1.jsx)(MoreVert_1.default, {}, void 0) }), void 0) }, void 0));
    }
    (0, react_1.useEffect)(function () {
        var _a;
        if (sortModel.length && listHook) {
            listHook.changeFilters(__assign(__assign({}, listHook.filters), { sort: (_a = {}, _a[sortModel[0].field] = sortModel[0].sort, _a) }));
        }
        else {
            listHook.changeFilters(__assign(__assign({}, listHook.filters), { sort: undefined }));
        }
    }, [sortModel]); // eslint-disable-line
    return ((0, jsx_runtime_1.jsxs)(material_1.Paper, __assign({ sx: {
            "& .MuiDataGrid-footerContainer": {
                justifyContent: "center !important",
            },
            "& .MuiDataGrid-root .MuiDataGrid-cell:focus": {
                outline: "none",
            },
        } }, { children: [(0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, { components: {
                    Pagination: Pagination_1.default,
                    LoadingOverlay: Loading_1.default,
                    NoRowsOverlay: NoRowsOverlay_1.default,
                }, autoHeight: true, disableColumnFilter: true, rows: listHook.data, loading: listHook.isLoading, rowCount: listHook.count, page: listHook.page, onPageChange: listHook.changePage, columns: colsWithAction.current, style: { height: listHook.count ? undefined : 300, maxHeight: 700 }, isRowSelectable: function () { return false; }, localeText: localeText, onSortModelChange: handleSort, sortModel: sortModel, pageSize: defaultPageSize, getRowId: getRowId, pagination: true, paginationMode: "server", sortingMode: "server", filterMode: "server" }, void 0), (0, jsx_runtime_1.jsx)(material_1.Menu, __assign({ anchorEl: anchorEl, open: isMenuOpen, onClose: closeMenu }, { children: actions === null || actions === void 0 ? void 0 : actions.map(function (action) {
                    function isDisabled() {
                        if (action.disabled === undefined)
                            return false;
                        if (typeof action.disabled === "boolean") {
                            return action.disabled;
                        }
                        else {
                            return action.disabled(listHook.selected, selectedRow);
                        }
                    }
                    return ((0, jsx_runtime_1.jsxs)(material_1.MenuItem, __assign({ onClick: function () { return action.onClick(listHook.selected, handleRemove); }, disabled: isDisabled() }, { children: [(0, react_1.createElement)(action.icon, {
                                sx: { marginRight: 1 },
                            }), action.title] }), "action-" + action.title));
                }) }), void 0), (0, jsx_runtime_1.jsx)(RemoveEntityModal_1.RemoveEntityModal, { open: removeModal.state, handleClose: removeModal.close, listHook: listHook }, void 0)] }), void 0));
}
exports.default = MuiTable;
