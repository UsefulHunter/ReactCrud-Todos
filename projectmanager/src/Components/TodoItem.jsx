import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ title }) => (
  <li className="Todo">
    <strong>{title}</strong>
  </li>
);

TodoItem.defaultProps = {
  title: '',
};

TodoItem.propTypes = {
  title: PropTypes.string,
};

export default TodoItem;
