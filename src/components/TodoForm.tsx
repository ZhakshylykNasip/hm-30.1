import { FC, useState, ChangeEvent, FormEvent } from "react";
import { TodoData } from "../App";

interface PropsForm {
  newTodoHandler: (data: TodoData) => void;
}

export const TodoForm: FC<PropsForm> = ({ newTodoHandler }) => {
  const [value, setValue] = useState("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      id: Date.now().toString(),
      title: value,
      completed: false,
    };

    newTodoHandler(data);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={value} onChange={changeHandler} />
        <button>Add</button>
      </form>
    </div>
  );
};
