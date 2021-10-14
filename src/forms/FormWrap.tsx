import DialogActions from "@mui/material/DialogActions";
import Paper from "@mui/material/Paper";
import { Form, Formik } from "formik";
import { ReactNode } from "react";

import BackButton from "./inputs/BackButton";
import SubmitButton from "./inputs/SubmitButton";

interface FormWrapProps<T> {
  children: ReactNode;
  initialValues: T;
  validationSchema?: unknown | (() => unknown);
  onSubmit(values: T): Promise<void>;
}

export default function FormWrap<T>({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: FormWrapProps<T>) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Paper sx={{ padding: 2, display: "flex" }}>
          <Form style={{ width: "100%" }}>
            <>{children}</>

            <DialogActions sx={{ padding: 0, marginTop: 2 }}>
              <BackButton text="Voltar" />
              <SubmitButton data-cy="save" text="Salvar" />
            </DialogActions>
          </Form>
        </Paper>
      )}
    </Formik>
  );
}
