import TextField from "@mui/material/TextField";
import { useField, useFormikContext } from "formik";
import React from "react";
import { DebounceInput } from "react-debounce-input";

interface TextInputProps {
  name: string;
  label: string;
  size?: "small" | "medium";
  disabled?: boolean;
  fullWidth?: boolean;
  endAdornment?: React.ReactNode;
  hyperactive?: boolean;
  debounce?: boolean;
  "data-cy"?: string;
}

function TextInput(props: TextInputProps) {
  const [field, meta] = useField(props);
  const formik = useFormikContext();
  const inputProps = { ...props, debounce: undefined, hyperactive: undefined };
  const { hyperactive, endAdornment } = props;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.name = props.name;
    field.onChange(event);

    if (hyperactive) {
      formik.submitForm();
    }
  }

  return props.debounce ? (
    <DebounceInput
      minLength={1}
      debounceTimeout={500}
      element={TextField}
      {...field}
      {...inputProps}
      fullWidth={props.fullWidth ?? true}
      onChange={handleChange}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      InputProps={{
        endAdornment,
        name: props.name,
      }}
    />
  ) : (
    <TextField
      {...field}
      {...inputProps}
      fullWidth={props.fullWidth ?? true}
      onChange={handleChange}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      InputProps={{
        endAdornment,
      }}
    />
  );
}

export default TextInput;
