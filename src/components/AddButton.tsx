import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/router";

interface Props {
  "data-cy"?: string;
}

const FAB_MARGIN = 8 * 3;

export function AddButton(props: Props) {
  const router = useRouter();

  function handleClick() {
    router.push(router.pathname + "/new");
  }

  return (
    <Box position="fixed" bottom={FAB_MARGIN} right={FAB_MARGIN}>
      <Tooltip title="Adicionar">
        <Fab
          data-cy={props["data-cy"]}
          onClick={handleClick}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}
