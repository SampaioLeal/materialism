import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Button, Chip, styled, Grid } from "@mui/material";
import { Form, Formik, FormikProps } from "formik";
import { memo, useEffect, useMemo, useRef, useState } from "react";

import { TableQueryHook } from "../hooks/useTableQuery";

import { formatDate } from "../utils/formatters";

import { FiltersModal } from "../filters/FiltersModal";
import { buildInitialValues, getFilterValue } from "./utils";
import { Filter } from "../types";

const SmallButton = styled(Button)(({ theme }) => ({
  background: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  minWidth: 32,
  padding: 8,

  ":hover": {
    background: theme.palette.action.hover,
  },
}));

interface FiltersProps {
  filters: Filter[];
  listHook: TableQueryHook;
}

function FiltersComponent({ filters, listHook }: FiltersProps) {
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const initialValues = useMemo(() => buildInitialValues(filters), [filters]);

  function handleSubmit(values: Record<string, unknown>) {
    const newFilters: Record<string, unknown> = {};

    filters.forEach((filter) => {
      if (values[filter.field] !== "")
        newFilters[filter.field] = getFilterValue(filter, values);
    });

    listHook.changeFilters(newFilters);
    handleCloseFilters();
  }

  function handleDelete(
    key: string,
    formik: FormikProps<{
      [key: string]: unknown;
    }>
  ) {
    return () => {
      formik.setFieldValue(key, "");
      formik.submitForm();
    };
  }

  function handleReset(
    formik: FormikProps<{
      [key: string]: unknown;
    }>
  ) {
    return () => {
      formik.resetForm();
      formik.submitForm();
    };
  }

  function handleToggleFilters() {
    setFiltersOpen((prevOpen) => !prevOpen);
  }

  function handleCloseFilters(event?: Event | React.SyntheticEvent) {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event?.target as HTMLElement)
    ) {
      return;
    }

    setFiltersOpen(false);
  }

  const prevOpen = useRef(isFiltersOpen);
  useEffect(() => {
    if (prevOpen.current === true && isFiltersOpen === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = isFiltersOpen;
  }, [isFiltersOpen]);

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs>
                <Grid container spacing={2}>
                  {Object.entries(listHook.filters).map(([key, value]) => {
                    let title = value;
                    if (key === "sort") return;

                    if (value instanceof Date) title = formatDate(value);

                    return (
                      <Grid item key={key}>
                        <Chip
                          label={String(title)}
                          onDelete={handleDelete(key, formik)}
                        />
                      </Grid>
                    );
                  })}

                  <Grid item>
                    <Button
                      size="small"
                      onClick={handleToggleFilters}
                      ref={anchorRef}
                    >
                      <AddIcon />
                      Adicionar filtro
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <SmallButton variant="contained" onClick={handleReset(formik)}>
                  <DeleteIcon fontSize="small" />
                </SmallButton>
              </Grid>

              <Grid item>
                <SmallButton variant="contained" onClick={listHook.refresh}>
                  <RefreshIcon fontSize="small" />
                </SmallButton>
              </Grid>
            </Grid>

            <FiltersModal
              state={isFiltersOpen}
              handleClose={handleCloseFilters}
              anchorEl={anchorRef.current}
              filters={filters}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export const Filters = memo(FiltersComponent);
