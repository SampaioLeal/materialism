import Button from "@mui/material/Button";
import { useFormikContext } from "formik";

interface SubmitButtonProps {
  text: string;
  fullWidth?: boolean;
  "data-cy"?: string;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const formik = useFormikContext();

  return (
    <Button
      fullWidth={props.fullWidth}
      type="submit"
      variant="contained"
      color="primary"
      disabled={formik.isSubmitting}
      data-cy={props["data-cy"]}
    >
      {props.text}
    </Button>
  );
}
