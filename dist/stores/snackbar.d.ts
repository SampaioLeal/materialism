import { AlertColor } from "@mui/material/Alert";
declare class SnackbarStore {
    constructor();
    isOpen: boolean;
    message: string;
    severity: AlertColor;
    alert(message: string, severity: AlertColor): void;
    resetSnackbar(): void;
    private changeSnackbar;
    openSnackbar(): void;
    closeSnackbar(): void;
}
declare const snackbarStore: SnackbarStore;
export default snackbarStore;
//# sourceMappingURL=snackbar.d.ts.map