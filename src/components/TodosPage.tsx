import React, { FC, useCallback, useEffect, useState } from "react";
import { ITodo } from "./types";
import axios from "axios";
import TodoItem from "./TodoItem";
import List from "./List";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = useCallback(async () => {
    try {
      const responce = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(responce.data);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default TodosPage;
