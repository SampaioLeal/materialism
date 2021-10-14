/// <reference types="react" />
interface CheckboxGroupInputProps {
    name: string;
    label?: string;
    options: {
        label: string;
        value: string | number;
    }[];
    disabled?: boolean;
}
declare function CheckboxGroupInput({ options, label, ...props }: CheckboxGroupInputProps): JSX.Element;
export default CheckboxGroupInput;
//# sourceMappingURL=CheckboxGroupInput.d.ts.map