import { AxiosInstance, AxiosRequestConfig } from "axios";
export interface EntityHook<T> {
    data: T | null;
    list: T[];
    get(): Promise<void>;
    getAll(): Promise<T[]>;
    getById(id: string | number): Promise<T>;
    create(data: Omit<T, "id">): Promise<T>;
    edit(id: string | number, data: Partial<T>): Promise<T>;
}
interface EntityConfig {
    api: AxiosInstance;
    path: string;
    id?: string | number;
}
declare function useEntity<Entity>(config: EntityConfig): {
    data: Entity | null;
    list: Entity[];
    get: () => Promise<void>;
    getAll: (params?: Record<string, unknown> | undefined) => Promise<void>;
    getById: (id: string | number) => Promise<Entity | undefined>;
    create: <T>(data: T | Omit<Entity, "id">, options?: AxiosRequestConfig | undefined) => Promise<Entity | undefined>;
    edit: <T_1>(id: string | number, data: Partial<T_1> | Partial<Entity>, options?: AxiosRequestConfig | undefined) => Promise<Entity | undefined>;
};
export default useEntity;
//# sourceMappingURL=useEntity.d.ts.map