import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./style.css";

const TotoList = (props) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || todo.text?.trim().length <= 0) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };
  return (
    <div className="todo-list">
      <h1>What's your plan for today ?</h1>
     <div className="todo-items-container">
     <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
     </div>
    </div>
  );
};

TotoList.propTypes = {};

export default TotoList;
