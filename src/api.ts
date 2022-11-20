export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export async function fetchTodos(page: number = 1): Promise<Todo[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
  );
  return await response.json();
}

export async function fetchTodo(id: number): Promise<Todo> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return await response.json();
}

export async function createTodo(payload: Omit<Todo, "id">) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return await response.json();
}
