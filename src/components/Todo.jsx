import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css"
function Todo(props) {
  const { todos, completeTodo } = props;
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
      </div>
    );
  });
}

Todo.propTypes = {};

export default Todo;
