import { GetServerSideProps } from "next";
import { TodoAttributes } from "../sqlite/todo";
import TodoForm from "./components/TodoForm";
import { ChangeEvent, FC, PropsWithChildren } from "react";
import { getAllTodos } from "../queries/todo";

interface IndexProps extends PropsWithChildren {
  todos: TodoAttributes[]
}

const Index: FC<IndexProps> = ({ todos }) => {

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const todo = new FormData(event.target);
    console.log(todo.get('name'));
    fetch('/api/todo/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: todo.get('name')
      }),
    })
  }

  return (<div>
    <h1>Todo!</h1>
    <TodoForm onSubmit={onSubmit} available={true} />
    <div>
      <ul>
        {
          todos.map(todo => <li key={todo.id}>{todo.name}</li>)
        }
      </ul>
    </div>
  </div>)
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async (context) => {
  // fetching data here
  const todos = await getAllTodos();
  // Return the data as props
  return {
    props: {
      todos
    },
  };
};

export default Index;
