import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api";
import { DataLoader } from "../components/DataLoader";
import { TodosList } from "../components/TodosList";

export function ReactQueryFetchData() {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["todos-basic"],
    queryFn: () => fetchTodos(),
    staleTime: 5000
  });

  return (
    <DataLoader isLoading={isLoading} isError={isError}>
      {isFetching && <p>Fetching fresh data</p>}
      <TodosList todos={data || []} />
    </DataLoader>
  );
}
