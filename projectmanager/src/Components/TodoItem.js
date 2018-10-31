import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ title }) => (
  <li className="Todo">
    <strong>{title}</strong>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.object,
};

export default TodoItem;
