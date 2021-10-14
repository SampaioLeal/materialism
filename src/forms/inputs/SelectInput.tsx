import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useField } from "formik";

interface SelectInputProps {
  name: string;
  label: string;
  options: { label: string; value: number | string }[];
  size?: "small" | "medium";
  disabled?: boolean;
  fullWidth?: boolean;
}

function SelectInput(props: SelectInputProps) {
  const [field, meta] = useField(props);
  const { label, options } = props;

  return (
    <FormControl
      fullWidth={props.fullWidth ?? true}
      size={props.size}
      variant="outlined"
      error={meta.touched && Boolean(meta.error)}
    >
      <InputLabel id="select">{label}</InputLabel>
      <Select labelId="select" {...field} {...props}>
        <MenuItem value="">
          <em>Selecione uma opção</em>
        </MenuItem>
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>

      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
}

export default SelectInput;
