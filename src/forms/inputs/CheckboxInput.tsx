import Checkbox from "@mui/material/Checkbox";
import { useField } from "formik";

interface CheckboxInputProps {
  name: string;
  disabled?: boolean;
}

function CheckboxInput({ ...props }: CheckboxInputProps) {
  const [field, , helpers] = useField(props);

  function handleChange(
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) {
    helpers.setValue(checked);
  }

  return (
    <Checkbox
      {...field}
      onChange={handleChange}
      checked={field.value}
      color="primary"
    />
  );
}

export default CheckboxInput;
