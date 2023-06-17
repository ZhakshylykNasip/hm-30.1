import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { TodoData } from "../App";

interface PropsTodoItem {
  item: TodoData;
  setTodo: Dispatch<SetStateAction<TodoData[]>>;
  deleteTodoHandler: (id: string) => void;
  completedTodoHandler: (id: string) => void;
  todo: TodoData[];
}

export const TodoItem: FC<PropsTodoItem> = ({
  item,w
        </>
      )}
    </div>
  );
};
