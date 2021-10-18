import { SvgIconComponent } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, Paper } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridLocaleText,
  GridRenderCellParams,
  GridRowIdGetter,
  GridSortModel,
} from "@mui/x-data-grid";
import { useState, createElement, useEffect, useRef } from "react";

import { RemoveEntityModal } from "../components/RemoveEntityModal";

import useModal from "../hooks/useModal";
import { TableQueryHook } from "../hooks/useTableQuery";

import MuiLoading from "./Loading";
import MuiNoRowsOverlay from "./NoRowsOverlay";
import MuiPagination from "./Pagination";

interface Action {
  title: string;
  icon: SvgIconComponent;
  onClick: (id: string | number, handleRemove: () => void) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  disabled?: boolean | ((id: number | string, row: any) => boolean);
}

interface MuiTableProps {
  columns: GridColDef[];
  listHook: TableQueryHook;

  getRowId?: GridRowIdGetter;
  actions?: Action[];
}

const defaultPageSize = 10;
const localeText: Partial<GridLocaleText> = {
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
function MuiTable({ columns, listHook, actions, getRowId }: MuiTableProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const colsWithAction = useRef([
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
    },
    ...columns,
  ]);
  const isMenuOpen = Boolean(anchorEl);
  const removeModal = useModal();
  const selectedRow = listHook.data.find(
    (item) => item.id === listHook.selected
  );

  function openMenu(
    event: React.MouseEvent<HTMLButtonElement>,
    id: string | number
  ) {
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

  function handleSort(model: GridSortModel) {
    setSortModel(model);
  }

  // TODO: arrumar renderização desnecessária disso
  function renderActionbutton(params: GridRenderCellParams) {
    return (
      <>
        <IconButton onClick={(event) => openMenu(event, params.id)}>
          <MoreVertIcon />
        </IconButton>
      </>
    );
  }

  useEffect(() => {
    if (sortModel.length && listHook) {
      listHook.changeFilters({
        ...listHook.filters,
        sort: { [sortModel[0].field]: sortModel[0].sort },
      });
    } else {
      listHook.changeFilters({
        ...listHook.filters,
        sort: undefined,
      });
    }
  }, [sortModel]); // eslint-disable-line

  return (
    <Paper
      sx={{
        "& .MuiDataGrid-footerContainer": {
          justifyContent: "center !important",
        },
        "& .MuiDataGrid-root .MuiDataGrid-cell:focus": {
          outline: "none",
        },
      }}
    >
      <DataGrid
        components={{
          Pagination: MuiPagination,
          LoadingOverlay: MuiLoading,
          NoRowsOverlay: MuiNoRowsOverlay,
        }}
        autoHeight
        disableColumnFilter
        rows={listHook.data}
        loading={listHook.isLoading}
        rowCount={listHook.count}
        page={listHook.page}
        onPageChange={listHook.changePage}
        columns={colsWithAction.current}
        style={{ height: listHook.count ? undefined : 300, maxHeight: 700 }}
        isRowSelectable={() => false}
        localeText={localeText}
        onSortModelChange={handleSort}
        sortModel={sortModel}
        pageSize={defaultPageSize}
        getRowId={getRowId}
        pagination
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
      />

      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={closeMenu}>
        {actions?.map((action) => {
          function isDisabled() {
            if (action.disabled === undefined) return false;

            if (typeof action.disabled === "boolean") {
              return action.disabled;
            } else {
              return action.disabled(listHook.selected, selectedRow);
            }
          }

          return (
            <MenuItem
              key={`action-${action.title}`}
              onClick={() => action.onClick(listHook.selected, handleRemove)}
              disabled={isDisabled()}
            >
              {createElement(action.icon, {
                sx: { marginRight: 1 },
              })}
              {action.title}
            </MenuItem>
          );
        })}
      </Menu>

      <RemoveEntityModal
        open={removeModal.state}
        handleClose={removeModal.close}
        listHook={listHook}
      />
    </Paper>
  );
}

export default MuiTable;
