import { Grid, Typography, Box, Button } from "@mui/material";

import TextInput from "../forms/inputs/TextInput";
import { GridActions } from "../components/GridActions";
import { TabPanel } from "../components/TabPanel";

interface TextFilterProps {
  name: string;
  activeTab: number;
  index: number;
}

export function TextFilter({ name, activeTab, index }: TextFilterProps) {
  return (
    <TabPanel value={activeTab} index={index}>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Busque por um determinado texto</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextInput name={name} label="Pesquisar" fullWidth />
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
