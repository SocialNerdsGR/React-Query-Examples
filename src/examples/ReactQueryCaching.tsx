import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchTodo } from "../api";
import { Button } from "../components/Button";
import { DataLoader } from "../components/DataLoader";
import { TodosList } from "../components/TodosList";

export function ReactQueryCaching() {
  const query = useQueryClient();
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["todos-cache", 1],
    queryFn: () => fetchTodo(1),
    staleTime: 5000,
    refetchOnWindowFocus: false
  });

  return (
    <DataLoader isLoading={isFetching} isError={isError}>
      <Button
        onClick={() => {
          console.log("invalidate data");
          query.invalidateQueries(["todos-cache"]);
        }}
      >
        Invalidate
      </Button>
      <TodosList todos={data ? [data] : []} />
    </DataLoader>
  );
}
