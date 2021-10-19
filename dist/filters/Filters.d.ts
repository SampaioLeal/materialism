/// <reference types="react" />
import { TableQueryHook } from "../hooks/useTableQuery";
import { Filter } from "../types";
interface FiltersProps {
    filters: Filter[];
    listHook: TableQueryHook;
}
declare function FiltersComponent({ filters, listHook }: FiltersProps): JSX.Element;
export declare const Filters: import("react").MemoExoticComponent<typeof FiltersComponent>;
export {};
//# sourceMappingURL=Filters.d.ts.map