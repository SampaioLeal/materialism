import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import { useField } from "formik";

import CheckboxInput from "./CheckboxInput";

interface CheckboxGroupInputProps {
  name: string;
  label?: string;
  options: { label: string; value: string | number }[];
  disabled?: boolean;
}

function CheckboxGroupInput({
  options,
  label,
  ...props
}: CheckboxGroupInputProps) {
  const [, meta] = useField(props);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {options.map((option) => {
          return (
            <FormControlLabel
              key={`${props.name}.${option.value}`}
              control={<CheckboxInput name={`${props.name}.${option.value}`} />}
              label={option.label}
            />
          );
        })}
      </FormGroup>
      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
}

export default CheckboxGroupInput;
