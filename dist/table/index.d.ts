/// <reference types="react" />
import { SvgIconComponent } from "@mui/icons-material";
import { GridColDef, GridRowIdGetter } from "@mui/x-data-grid";
import { TableQueryHook } from "../hooks/useTableQuery";
interface Action {
    title: string;
    icon: SvgIconComponent;
    onClick: (id: string | number, handleRemove: () => void) => void;
    disabled?: boolean | ((id: number | string, row: any) => boolean);
}
interface MuiTableProps {
    columns: GridColDef[];
    listHook: TableQueryHook;
    getRowId?: GridRowIdGetter;
    actions?: Action[];
}
declare function MuiTable({ columns, listHook, actions, getRowId }: MuiTableProps): JSX.Element;
export default MuiTable;
//# sourceMappingURL=index.d.ts.map