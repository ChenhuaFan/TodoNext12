import { Button, Divider } from "@mui/joy";
import TodoForm from "./components/TodoForm";
import { ChangeEvent, FC } from "react";

const IndexComponent: FC<null> = () => {

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const todo = new FormData(event.target);
    console.log(todo.get('content'));
  }

  return (<div>
    <h1>Todo!</h1>
    <TodoForm onSubmit={onSubmit} available={true} />
  </div>)
}

export default IndexComponent;