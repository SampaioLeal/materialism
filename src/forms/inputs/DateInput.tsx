import DatePicker from "@mui/lab/DatePicker";
import { TextField, TextFieldProps } from "@mui/material";
import { Tooltip } from "@mui/material";
import { useField } from "formik";

interface DateInputProps {
  name: string;
  label: string;
}

function DateInput(props: DateInputProps) {
  const [field, meta, helpers] = useField(props);
  const { label } = props;

  function handleChange(date: Date | null) {
    helpers.setValue(date);
  }

  function renderIconButton(params: TextFieldProps) {
    const endAdornment = params.InputProps?.endAdornment;

    if (endAdornment) {
      return (
        <Tooltip followCursor title="Selecionar data">
          {/* @ts-expect-error endAdornment always will be a valid ReactNode */}
          {endAdornment}
        </Tooltip>
      );
    } else {
      return null;
    }
  }

  return (
    <DatePicker
      value={field.value ? new Date(field.value) : null}
      onChange={handleChange}
      showToolbar
      cancelText="Cancelar"
      label={label}
      renderInput={(params) => (
        <>
          <TextField
            {...params}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: renderIconButton(params),
            }}
          />
        </>
      )}
    />
  );
}

export default DateInput;
