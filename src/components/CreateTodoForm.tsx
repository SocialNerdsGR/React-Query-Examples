import { Button } from "./Button";

type CreateTodoFormProps = {
  onCreate: (title: string) => void;
};

export function CreateTodoForm({ onCreate }: CreateTodoFormProps) {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: { value: string };
    };

    onCreate(target.title.value);
  };

  return (
    <form className="CreateForm" onSubmit={handleSubmit}>
      <input className="Input" type="text" placeholder="Title" name="title" />
      <Button type="submit">Create todo</Button>
    </form>
  );
}
