import { AlertColor } from "@mui/material/Alert";
import { makeAutoObservable } from "mobx";

class SnackbarStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  isOpen = false;
  message = "";
  severity: AlertColor = "info";

  alert(message: string, severity: AlertColor) {
    setTimeout(() => {
      this.changeSnackbar(message, severity);
      this.openSnackbar();
    }, 200);
  }
  resetSnackbar() {
    this.changeSnackbar("", "info");
  }
  private changeSnackbar(message: string, severity: AlertColor) {
    this.message = message;
    this.severity = severity;
  }
  openSnackbar() {
    this.isOpen = true;
  }
  closeSnackbar() {
    this.isOpen = false;
  }
}

const snackbarStore = new SnackbarStore();
export default snackbarStore;
