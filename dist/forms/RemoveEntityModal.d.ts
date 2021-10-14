/// <reference types="react" />
import { TableQueryHook } from "../hooks/useTableQuery";
interface RemoveModalProps {
    open: boolean;
    listHook: TableQueryHook;
    handleClose(): void;
}
export default function RemoveEntityModal({ open, listHook, handleClose, }: RemoveModalProps): JSX.Element;
export {};
//# sourceMappingURL=RemoveEntityModal.d.ts.map