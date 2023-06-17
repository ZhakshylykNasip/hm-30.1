import { FC, Dispatch, SetStateAction } from "react";
import { TodoItem } from "./TodoItem";
import { TodoData } from "../App";

interface PropsTodoList {
  setTodo: Dispatch<SetStateAction<TodoData[]>>;
  todo: TodoData[];
}

export const TodoList: FC<PropsTodoList> = ({ setTodo, todo }) => {
  const deleteTodoHandler = (id: string) => {
    const removeTodo = todo.filter((item) => item.id !== id);

    setTodo(removeTodo);
  };

  const completedTodoHandler = (id: string) => {
    const completedTodo = todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodo(completedTodo);
  };

  return (
    <div>
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          todo={todo}
          setTodo={setTodo}
          deleteTodoHandler={deleteTodoHandler}
          completedTodoHandler={completedTodoHandler}
        />
      ))}
    </div>
  );
};
