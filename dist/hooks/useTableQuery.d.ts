/// <reference types="react" />
import { AxiosInstance } from "axios";
export interface TableQueryHook {
    data: any[];
    page: number;
    count: number;
    filters: Record<string, unknown>;
    isLoading: boolean;
    selected: string | number;
    refresh(): void;
    changePage(page: number): void;
    changeFilters(values: Record<string, unknown>): void;
    setSelected: React.Dispatch<React.SetStateAction<number | string>>;
    removeSelected(): Promise<void>;
}
interface TableQueryConfig {
    api: AxiosInstance;
    path: string;
    page?: number;
}
declare function useTableQuery(config: TableQueryConfig): {
    data: never[];
    page: number;
    count: number;
    filters: {};
    isLoading: boolean;
    selected: string | number;
    refresh: () => void;
    changePage: (page: number) => void;
    changeFilters: (values: Record<string, unknown>) => void;
    setSelected: import("react").Dispatch<import("react").SetStateAction<string | number>>;
    removeSelected: () => Promise<void>;
};
export default useTableQuery;
//# sourceMappingURL=useTableQuery.d.ts.map