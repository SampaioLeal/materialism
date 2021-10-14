import { Grid, Box, Button } from "@mui/material";
import { useMemo } from "react";

import CheckboxGroupInput from "../forms/inputs/CheckboxGroupInput";
import { GridActions } from "../components/GridActions";
import { TabPanel } from "../components/TabPanel";

interface EnumFilterProps {
  name: string;
  activeTab: number;
  index: number;
  options: FilterEnum[];
}

export function EnumFilter({
  name,
  activeTab,
  index,
  options,
}: EnumFilterProps) {
  const checkboxOptions = useMemo(
    () =>
      options.map((option) => ({
        label: option.title,
        value: option.value,
      })),
    [options]
  );

  return (
    <TabPanel value={activeTab} index={index}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CheckboxGroupInput
              name={name}
              label="Escolha as opções"
              options={checkboxOptions}
            />
          </Grid>
          <GridActions item xs={12}>
            <Button type="submit" variant="contained">
              Aplicar
            </Button>
          </GridActions>
        </Grid>
      </Box>
    </TabPanel>
  );
}
