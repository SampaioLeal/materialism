import { ReactNode } from "react";
interface FormWrapProps<T> {
    children: ReactNode;
    initialValues: T;
    validationSchema?: unknown | (() => unknown);
    onSubmit(values: T): Promise<void>;
}
export default function FormWrap<T>({ children, initialValues, validationSchema, onSubmit, }: FormWrapProps<T>): JSX.Element;
export {};
//# sourceMappingURL=FormWrap.d.ts.map