import { CreateTodoForm } from "../components/CreateTodoForm";
import { TodosList } from "../components/TodosList";
import { DataLoader } from "../components/DataLoader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, fetchTodos } from "../api";
import { Navigate, useNavigate } from "react-router-dom";

export function ReactQueryMutation() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["todos-mutations"],
    queryFn: () => fetchTodos(),
    staleTime: 5000
  });
  const navigate = useNavigate();
  const mutation = useMutation(
    (title: string) => {
      return createTodo({ title, userId: 1, completed: false });
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["todos-mutations"]);
        console.log(data);
      },
      onError: (error) => {
        console.log("error");
      }
    }
  );

  return (
    <DataLoader isLoading={isLoading} isError={isError}>
      <DataLoader isLoading={mutation.isLoading} isError={false}>
        <CreateTodoForm
          onCreate={(title: string) => {
            mutation.mutate(title, {
              onSuccess: () => {
                navigate("/basic");
              },
              onError: () => {}
            });
          }}
        />
      </DataLoader>
      {isFetching && <p>Fetching fresh data</p>}
      <TodosList todos={data || []} />
    </DataLoader>
  );
}
