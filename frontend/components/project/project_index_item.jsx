import React from 'react';

const ProjectIndexItem = ({ project, deleteProject, updateProject }) => {

  const handleDelete = () => (
    deleteProject(project.id)
  );

  const allowUpdate = () => (
    console.log('make title and description fields into a form')
  );

  return (
    <div className="project-index-item">
      <div className="project-index-item-header">
        <h3>{ project.title }</h3>
        <span className="delete-project"
          onClick={ handleDelete }> X </span>
        <span className="update-project"
          onClick={ allowUpdate }> U </span>
      </div>
      <div className="project-index-body">
        <p>{ project.description }</p>
      </div>
    </div>
  );
};



export default ProjectIndexItem;
