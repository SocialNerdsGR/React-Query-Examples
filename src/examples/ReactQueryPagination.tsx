import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api";
import { DataLoader } from "../components/DataLoader";
import { Pagination, usePagination } from "../components/Pagination";
import { TodosList } from "../components/TodosList";

export function ReactQueryPagination() {
  const pagination = usePagination();
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["todos-pagination", `todos-pagination-${pagination.page}`],
    queryFn: () => fetchTodos(pagination.page),
    keepPreviousData: true,
    staleTime: Infinity
  });

  return (
    <DataLoader isLoading={isLoading} isError={isError}>
      {isFetching && <p>Fetching fresh data...</p>}
      <TodosList todos={data || []} />
      <Pagination {...pagination} />
    </DataLoader>
  );
}
