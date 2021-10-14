/// <reference types="react" />
interface SelectInputProps {
    name: string;
    label: string;
    options: {
        label: string;
        value: number | string;
    }[];
    size?: "small" | "medium";
    disabled?: boolean;
    fullWidth?: boolean;
}
declare function SelectInput(props: SelectInputProps): JSX.Element;
export default SelectInput;
//# sourceMappingURL=SelectInput.d.ts.map