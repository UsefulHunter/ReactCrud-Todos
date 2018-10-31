import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const Todos = ({ todos }) => (
  <div className="Todos">
    <h3>Todo List</h3>
    {todos && todos.map(todo => <TodoItem key={todo.title} title={todo.title} />)}
  </div>
);

Todos.defaultProps = {
  todos: [],
};

Todos.propTypes = {
  todos: {
    title: PropTypes.string,
  },
};

export default Todos;
