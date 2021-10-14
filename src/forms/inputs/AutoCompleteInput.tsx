import { TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { useField } from "formik";

interface TextInputProps {
  name: string;
  label: string;
  options: { label: string; value: number | string }[];
  size?: "small" | "medium";
}

function AutoCompleteInput(props: TextInputProps) {
  const [field, , helpers] = useField(props);

  return (
    <Autocomplete
      value={
        props.options.find((option) => option.value === field.value) || null
      }
      onChange={(
        _event: unknown,
        newValue: { label: string; value: number | string } | null
      ) => {
        helpers.setValue(newValue?.value);
      }}
      getOptionLabel={(option) => option.label}
      options={props.options}
      renderInput={(params) => (
        <TextField {...params} label={props.label} size={props.size} />
      )}
    />
  );
}

export default AutoCompleteInput;
