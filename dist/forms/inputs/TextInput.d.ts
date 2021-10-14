import React from "react";
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
declare function TextInput(props: TextInputProps): JSX.Element;
export default TextInput;
//# sourceMappingURL=TextInput.d.ts.map