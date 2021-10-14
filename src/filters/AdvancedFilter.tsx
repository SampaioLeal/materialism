import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { Form, Formik, useFormikContext } from "formik";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.h5.fontSize,
}));

export function AdvancedFilter({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const formik = useFormikContext<{ [key: string]: unknown }>();
  const hasFilters = !!Object.values(formik.values).some((value) => !!value);

  function openDrawer() {
    setIsOpen(true);
  }
  function closeDrawer() {
    setIsOpen(false);
  }

  function clearFilters() {
    formik.resetForm();
    formik.submitForm();
  }

  function submit(values: Record<string, unknown>) {
    formik.setValues(values);
    formik.submitForm();
    closeDrawer();
  }

  return (
    <>
      <Tooltip title="Filtros">
        <IconButton onClick={openDrawer} size="large">
          {hasFilters ? <FilterAltIcon /> : <FilterAltOutlinedIcon />}
        </IconButton>
      </Tooltip>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            padding: 2,
            minWidth: 350,
          },
        }}
      >
        <Formik initialValues={{}} onSubmit={submit}>
          {() => (
            <Form>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Title>Filtros</Title>
                </Grid>
                <Grid item>
                  <Tooltip title="Fechar">
                    <IconButton onClick={closeDrawer} size="large">
                      <CloseIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>

              <Box marginY={2}>{children}</Box>

              <Grid container spacing={2}>
                <Grid item xs>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={clearFilters}
                  >
                    Limpar
                  </Button>
                </Grid>

                <Grid item xs>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Buscar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Drawer>
    </>
  );
}
