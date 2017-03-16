import React from 'react';
import { Link } from 'react-router';
import ProjectIndexItemFormContainer from './project_index_item_form_container';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleDelete() {
    this.props.deleteProject(this.props.project.id);
  }

  toggleEdit() {
    this.setState({ editMode: true });
  }

  render () {
    const showURL = `/projects/${this.props.project.id}`;

    if (this.state.editMode) {
      return(
        <ProjectIndexItemFormContainer project={this.props.project} />
      );
    } else {
      return (
        <div className="project-index-item">
          <div className="project-index-item-header">
            <h3> <Link to={showURL}>
              { this.props.project.title }
            </Link></h3>
            <span className="delete-project"
              onClick={ this.handleDelete }> X </span>
            <span className="update-project"
              onClick={ this.toggleEdit }> U </span>
          </div>
          <div className="project-index-body">
            <p>{ this.props.project.description }</p>
          </div>
        </div>
      );
    }
  }
}



export default ProjectIndexItem;
