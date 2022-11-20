import { Todo } from "../api";

type TodosListProps = {
  todos: Todo[];
};

export function TodosList({ todos }: TodosListProps) {
  return (
    <ul className="List">
      {todos.map((todo) => {
        return (
          <li className="ListItem" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}
