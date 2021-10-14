import Pagination from "@mui/material/Pagination";
import { useGridSlotComponentProps } from "@mui/x-data-grid";

export default function MuiPagination() {
  const { state, apiRef } = useGridSlotComponentProps();

  return (
    <Pagination
      sx={{ display: "flex" }}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
