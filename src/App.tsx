import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export interface TodoData {
  id: string;
  title: string;
  completed: boolean;
}

export const App = () => {
  const [todo, setTodo] = useState<TodoData[]>([]);

  const newTodoHandler = (data: TodoData) => {
    setTodo([...todo, data]);
  };

  return (
    <div>
      <TodoForm newTodoHandler={newTodoHandler} />
      <TodoList setTodo={setTodo} todo={todo} />
    </div>
  );
};
