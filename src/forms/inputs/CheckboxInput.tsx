import Checkbox from "@mui/material/Checkbox";
import { useField } from "formik";

interface CheckboxInputProps {
  name: string;
  disabled?: boolean;
}

function CheckboxInput({ ...props }: CheckboxInputProps) {
  const [field] = useField(props);

  return <Checkbox {...field} checked={field.value} color="primary" />;
}

export default CheckboxInput;
