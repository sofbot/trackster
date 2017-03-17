import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndexItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      title: this.props.project.title,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state['id'] = this.props.project.id;
    this.props.updateProject(this.state);
    this.setState({ editMode: false });
  }

  toggleEdit() {
    this.setState({ editMode: false });
  }

  render () {
    if (!this.state.editMode) {
      return (
        <ProjectIndexItem project={this.props.project} />
      );
    } else {
      return (
        <form className="project-index-item" onSubmit={ this.handleSubmit }>
          <div className="project-index-item-header">
            <i className="fa fa-code-fork header-icon" aria-hidden="true"></i>
            <input className="edit-title project-title-field"
              value={this.state.title}
              onChange={this.handleTitleChange}></input>
            <i className="fa fa-floppy-o header-icon"
                onClick={ this.handleSubmit }
                aria-hidden="true">
              <input type="submit" value=""></input>
            </i>
            <i className="fa fa-undo undo header-icon"
                  aria-hidden="true"
                  onClick={ this.toggleEdit }></i>
          </div>
        </form>
      );
    }
  }
}



export default ProjectIndexItemForm;
