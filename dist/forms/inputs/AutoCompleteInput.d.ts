/// <reference types="react" />
interface TextInputProps {
    name: string;
    label: string;
    options: {
        label: string;
        value: number | string;
    }[];
    size?: "small" | "medium";
}
declare function AutoCompleteInput(props: TextInputProps): JSX.Element;
export default AutoCompleteInput;
//# sourceMappingURL=AutoCompleteInput.d.ts.map