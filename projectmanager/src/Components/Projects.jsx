import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

const Projects = ({ onDelete, projects }) => (
  <div className="Projects">
    <h3>Latest Projects</h3>
    {projects &&
      projects.map(project => (
        <ProjectItem onDelete={onDelete} key={project.title} project={project} />
      ))}
  </div>
);

Projects.defaultProps = {
  projects: [],
  onDelete: () => {},
};

Projects.propTypes = {
  projects: {
    title: PropTypes.string,
  },
  onDelete: PropTypes.func,
};

export default Projects;
