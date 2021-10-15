import { useEffect, useState } from "react";

import { AxiosInstance } from "axios";
import snackbarStore from "../stores/snackbar";

export interface TableQueryHook {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const PAGE_SIZE = 10;

function useTableQuery(config: TableQueryConfig) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(config.page || 0);
  const [count, setCount] = useState(0);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState<string | number>("");
  const api = config.api;

  function changePage(page: number) {
    setPage(page);
  }

  function changeFilters(values: Record<string, unknown>) {
    setFilters(values);
    setPage(0);
  }

  async function removeSelected() {
    try {
      await api.delete(`${config.path}/${selected}`);
      fetch();
      snackbarStore.alert("Removido com sucesso.", "success");
    } catch (err) {
      snackbarStore.alert(
        "Ocorreu um erro ao remover! Tente novamente.",
        "error"
      );
    }
  }

  function refresh() {
    fetch();
  }

  async function fetch() {
    setIsLoading(true);

    try {
      const response = await api.get(config.path, {
        params: {
          limit: PAGE_SIZE,
          skip: PAGE_SIZE * page,
          ...filters,
        },
      });

      if (response.status === 200) {
        setCount(response.data.totalCount);
        setData(response.data.data);
      }
    } catch (err) {}

    setIsLoading(false);
  }

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filters]);

  return {
    data,
    page,
    count,
    filters,
    isLoading,
    selected,
    refresh,
    changePage,
    changeFilters,
    setSelected,
    removeSelected,
  };
}

export default useTableQuery;
