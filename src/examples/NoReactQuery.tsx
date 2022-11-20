import { useCallback, useEffect, useState } from "react";
import { fetchTodos, Todo, createTodo } from "../api";
import { TodosList } from "../components/TodosList";
import { CreateTodoForm } from "../components/CreateTodoForm";
import { DataLoader } from "../components/DataLoader";

export function NoReactQuery() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      const todos = await fetchTodos();
      setTodos(todos);
    } catch (error) {
      setError("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCreateTodo = useCallback(async (title: string) => {
    try {
      setIsLoading(true);
      setError("");
      await createTodo({ completed: false, userId: 1, title });
      await fetchTodos();
    } catch (error) {
      setError("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataLoader isLoading={isLoading} isError={Boolean(error)}>
      <CreateTodoForm onCreate={handleCreateTodo} />
      <TodosList todos={todos} />
    </DataLoader>
  );
}
