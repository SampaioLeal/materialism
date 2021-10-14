import { Grid, Typography, Box, Button } from "@mui/material";

import MaskInput from "../forms/inputs/MaskInput";
import { GridActions } from "../components/GridActions";
import { TabPanel } from "../components/TabPanel";

interface CPFFilterProps {
  name: string;
  activeTab: number;
  index: number;
}

export function CPFFilter({ name, activeTab, index }: CPFFilterProps) {
  return (
    <TabPanel value={activeTab} index={index}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Busque por um determinado CPF</Typography>
          </Grid>
          <Grid item xs={12}>
            <MaskInput
              mask="999.999.999-99"
              label="Pesquisar CPF"
              name={name}
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
