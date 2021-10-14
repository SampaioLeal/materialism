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
    onBlur?(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}
declare function NumericInput(props: NumericInputProps): JSX.Element;
export default NumericInput;
//# sourceMappingURL=NumericInput.d.ts.map