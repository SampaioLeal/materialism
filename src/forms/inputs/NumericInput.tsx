import { useField } from "formik";
import MuiNumericInput from "material-ui-numeric-input";
import React from "react";

interface NumericInputProps {
  id?: string;
  name: string;
  label: string;
  precision?: number;
  decimalChar?: string;
  thousandChar?: string;
  disabled?: boolean;
  value?: string;
  startAdornment?: React.ReactNode;
  onBlur?(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
}

function NumericInput(props: NumericInputProps) {
  const [field, meta, helper] = useField(props);

  return (
    <MuiNumericInput
      thousandChar={props.thousandChar ?? "."}
      decimalChar={props.decimalChar ?? ","}
      precision={props.precision ?? 2}
      variant="outlined"
      color="primary"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched ? meta.error : undefined}
      {...field}
      {...props}
      onChange={(number) => {
        helper.setValue(number);
      }}
    />
  );
}

export default NumericInput;
