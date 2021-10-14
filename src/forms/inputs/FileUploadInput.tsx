import Close from "@mui/icons-material/Close";
import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useField } from "formik";
import { ChangeEvent, useRef } from "react";

interface FileUploadInputProps {
  name: string;
  label: string;
  accept?: string;
}

function FileUploadInput(props: FileUploadInputProps) {
  const [field, meta, helpers] = useField(props);
  const inputRef = useRef<HTMLInputElement>(null);

  function getImageName() {
    const urlArray = field.value?.split("/");

    if (urlArray?.length) return urlArray[urlArray.length - 1];
    else return "";
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files?.length) helpers.setValue(files[0]);
  }

  function removeImage() {
    helpers.setValue(null);
    inputRef.current && (inputRef.current.value = "");
  }

  return (
    <>
      <Box display="flex" alignItems="center">
        <input
          onChange={handleChange}
          style={{
            display: "none",
          }}
          id={props.name}
          type="file"
          accept={props.accept}
          ref={inputRef}
        />
        <label htmlFor={props.name}>
          <Button variant="outlined" color="primary" component="span">
            {props.label}
          </Button>
        </label>
        <Typography
          sx={{
            paddingLeft: 2,
          }}
        >
          {field.value?.name ?? getImageName()}
        </Typography>

        {field.value && (
          <Tooltip title="Apagar imagem">
            <IconButton
              onClick={removeImage}
              size="small"
              style={{ marginLeft: 8 }}
            >
              <Close />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <FormHelperText error={meta.touched && Boolean(meta.error)}>
        {meta.touched && meta.error}
      </FormHelperText>
    </>
  );
}

export default FileUploadInput;
