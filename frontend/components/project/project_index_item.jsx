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
            <div className="project-index-item-title">
                <i className="fa fa-code-fork header-icon" aria-hidden="true"></i>
              <Link to={showURL}>
                { this.props.project.title }
              </Link>
            </div>
            <div className="header-action-btns">
              <span className="delete-project"
                onClick={ this.handleDelete }>
              <i className="fa fa-trash-o header-icon" aria-hidden="true"></i>
              </span>
              <span className="update-project"
                onClick={ this.toggleEdit }>
                <i className="fa fa-pencil-square-o header-icon" aria-hidden="true"></i>
              </span>
            </div>
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
