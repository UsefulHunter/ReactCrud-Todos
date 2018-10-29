import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = ({ todos }) => (
  <div className="Todos">
    <h3>Todo List</h3>
    {todos &&
      todos.map(todo => <TodoItem key={todo.title} title={todo.title} />)}
  </div>
);

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;
