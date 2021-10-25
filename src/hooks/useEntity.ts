import { AlertColor } from "@mui/material/Alert";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import snackbarStore from "../stores/snackbar";

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

// TODO: use mobx for entities management
function useEntity<Entity>(config: EntityConfig) {
  const [data, setData] = useState<Entity | null>(null);
  const [list, setList] = useState<Entity[]>([]);
  const api = config.api;

  function catchError(
    message = "Ocorreu um erro ao salvar! Tente novamente.",
    severity: AlertColor = "error"
  ) {
    snackbarStore.alert(message, severity);
  }

  function positiveFeedback() {
    snackbarStore.alert("Salvo com sucesso!", "success");
  }

  async function getAll(params?: Record<string, unknown>) {
    try {
      const response = await api.get(config.path, {
        params,
      });

      setList(response.data.data as Entity[]);
    } catch (err) {
      snackbarStore.alert(
        "Ocorreu um erro ao consultar os dados! Tente novamente.",
        "error"
      );
    }
  }

  async function get() {
    try {
      const response = await api.get(`${config.path}/${config.id}`);

      setData(response.data as Entity);
    } catch (err) {
      snackbarStore.alert(
        "Ocorreu um erro ao consultar os dados! Tente novamente.",
        "error"
      );
    }
  }

  async function getById(id: string | number) {
    try {
      const response = await api.get(`${config.path}/${id}`);
      return response.data as Entity;
    } catch (err) {
      snackbarStore.alert(
        "Ocorreu um erro ao consultar os dados! Tente novamente.",
        "error"
      );
    }
  }

  async function create<T>(
    data: T | Omit<Entity, "id">,
    options?: AxiosRequestConfig
  ) {
    try {
      const response = await api.post(config.path, data, options);
      positiveFeedback();
      return response.data as Entity;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      catchError(err.response.data.error);
    }
  }

  async function edit<T>(
    id: string | number,
    data: Partial<T> | Partial<Entity>,
    options?: AxiosRequestConfig
  ) {
    try {
      const response = await api.patch(`${config.path}/${id}`, data, options);
      positiveFeedback();
      return response.data as Entity;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      catchError(err.response.data.error);
    }
  }

  useEffect(() => {
    if (config.id) get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.id]);

  return { data, list, get, getAll, getById, create, edit };
}

export default useEntity;
