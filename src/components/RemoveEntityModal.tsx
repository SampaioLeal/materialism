import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { TableQueryHook } from "../hooks/useTableQuery";

interface RemoveModalProps {
  open: boolean;
  listHook: TableQueryHook;

  handleClose(): void;
}

export function RemoveEntityModal({
  open,
  listHook,
  handleClose,
}: RemoveModalProps) {
  function handleRemove() {
    listHook.removeSelected();
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Deseja remover o item selecionado?</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="outlined">
          Cancelar
        </Button>
        <Button
          onClick={handleRemove}
          color="primary"
          autoFocus
          variant="contained"
        >
          Remover
        </Button>
      </DialogActions>
    </Dialog>
  );
}
