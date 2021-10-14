import { Grid, Typography, Box, Button } from "@mui/material";

import NumericInput from "../forms/inputs/NumericInput";
import { GridActions } from "../components/GridActions";
import { TabPanel } from "../components/TabPanel";

interface NumericFilterProps {
  name: string;
  precision: number;
  decimalChar?: string;
  thousandChar?: string;
  activeTab: number;
  index: number;
}

export function NumericFilter({
  name,
  precision,
  decimalChar,
  thousandChar,
  activeTab,
  index,
}: NumericFilterProps) {
  return (
    <TabPanel value={activeTab} index={index}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Busque por um determinado número</Typography>
          </Grid>
          <Grid item xs={12}>
            <NumericInput
              name={name}
              label="Pesquisar"
              precision={precision}
              decimalChar={decimalChar}
              thousandChar={thousandChar}
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
