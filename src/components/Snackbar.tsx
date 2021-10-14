import Alert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import { observer } from "mobx-react-lite";
import snackbarStore from "../stores/snackbar";

function SnackbarComponent() {
  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={snackbarStore.isOpen}
      autoHideDuration={6000}
      onClose={snackbarStore.closeSnackbar}
    >
      <Alert
        onClose={snackbarStore.closeSnackbar}
        severity={snackbarStore.severity}
        variant="filled"
      >
        {snackbarStore.message}
      </Alert>
    </MuiSnackbar>
  );
}

export const Snackbar = observer(SnackbarComponent);
