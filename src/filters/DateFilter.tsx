import { Grid, Typography, Box, Button } from "@mui/material";

import DateInput from "../forms/inputs/DateInput";
import { GridActions } from "../components/GridActions";
import { TabPanel } from "../components/TabPanel";

interface DateFilterProps {
  name: string;
  activeTab: number;
  index: number;
}

export function DateFilter({ name, activeTab, index }: DateFilterProps) {
  return (
    <TabPanel value={activeTab} index={index}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Busque por uma determinada data</Typography>
          </Grid>
          <Grid item xs={12}>
            <DateInput name={name} label="Pesquisar" />
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
