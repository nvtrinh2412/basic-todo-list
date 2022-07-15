import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
  const { onSubmit } = props;
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };
  return (
    <div className="form-container">
      <form action="" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        className="todo-imput"
        onChange={handleChange}
      />
      <button className="todo-button">Add</button>
    </form>
    </div>

  );
}

TodoForm.propTypes = {};

export default TodoForm;
