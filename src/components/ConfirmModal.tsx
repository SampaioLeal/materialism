import { LoadingButton } from "@mui/lab";
import { Button, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import Image from "next/image";

interface ConfirmModalProps {
  open: boolean;
  handleClose(): void;
  width?: number | string;
  image?: {
    width: number | string;
    height: number | string;
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  confirmLabel: string;
  confirmLoading?: boolean;
  cancelLabel: string;
  onConfirm: () => void;
}

export function ConfirmModal(props: ConfirmModalProps) {
  const {
    open,
    handleClose,
    width,
    image,
    title,
    description,
    confirmLabel,
    confirmLoading,
    cancelLabel,
    onConfirm,
  } = props;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent sx={{ width: width ?? 400 }}>
        <Grid container spacing={2}>
          {image && (
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                height={image.height}
                width={image.width}
                src={image.src}
                alt={image.alt}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <Typography align="center" fontWeight="bold" variant="h5">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">{description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button onClick={handleClose} variant="outlined" fullWidth>
                  {cancelLabel}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <LoadingButton
                  loading={confirmLoading}
                  onClick={onConfirm}
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  {confirmLabel}
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
