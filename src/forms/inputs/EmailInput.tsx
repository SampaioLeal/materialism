import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useField } from "formik";

interface TextInputProps {
  name: string;
  label: string;
  "data-cy"?: string;
}

function EmailInput(props: TextInputProps) {
  const [field, meta] = useField(props);

  return (
    <TextField
      fullWidth
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default EmailInput;
