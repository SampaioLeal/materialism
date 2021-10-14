import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { TableQueryHook } from "../hooks/useTableQuery";

interface RemoveModalProps {
  open: boolean;
  listHook: TableQueryHook;

  handleClose(): void;
}

export default function RemoveEntityModal({
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
