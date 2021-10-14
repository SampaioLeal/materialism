import TextField from "@mui/material/TextField";
import { useField } from "formik";
import InputMask from "react-input-mask";

interface MaskInputProps {
  name: string;
  label: string;
  mask: string;
  type?: string;
}

function MaskInput(props: MaskInputProps) {
  const [field, meta] = useField(props);
  const { label, mask, type } = props;

  return (
    <InputMask mask={mask} maskChar="" alwaysShowMask={false} {...field}>
      {(inputProps: unknown) => (
        <TextField
          {...inputProps}
          label={label}
          type={type}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          fullWidth
        />
      )}
    </InputMask>
  );
}

export default MaskInput;
