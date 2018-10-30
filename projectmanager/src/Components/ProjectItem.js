import * as React from "react";
import PropTypes from "prop-types";

const ProjectItem = ({ project, onDelete }) => (
  <li className="Projects">
    <strong>{project.title}</strong>: {project.category}
    <button onClick={() => onDelete(project.id)}>X</button>
  </li>
);

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
};

export default ProjectItem;
