import React from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

const Projects = ({ onDelete, projects }) => (
  <div className="Projects">
    <h3>Latest Projects</h3>
    {projects &&
      projects.map(project => (
        <ProjectItem onDelete={onDelete} key={project.title} project={project} />
      ))}
  </div>
);
Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Projects;
