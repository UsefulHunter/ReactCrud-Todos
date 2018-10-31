import * as React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project, onDelete }) => (
  <li className="Projects">
    <strong>{project.title}</strong>
    {`: ${project.category}`}
    <button type="button" onClick={() => onDelete(project.id)}>
      X
    </button>
  </li>
);

ProjectItem.defaultProps = {
  project: {},
  onDelete: () => {},
};

ProjectItem.propTypes = {
  project: {
    title: PropTypes.string,
    category: PropTypes.string,
  },
  onDelete: PropTypes.func,
};

export default ProjectItem;
