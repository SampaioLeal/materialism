import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material";

interface SearchInputProps {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const CustomInput = styled(InputBase)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,

  maxWidth: 450,

  // border: "solid 1px",
  // borderColor: theme.palette.primary.main,
  boxShadow: theme.shadows[2],
}));

export function SearchInput(props: SearchInputProps) {
  return (
    <CustomInput
      fullWidth
      placeholder="Pesquisar"
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
      onChange={props.onChange}
    />
  );
}
