import React from 'react';
import { Link } from 'react-router';
import ProjectIndexItemFormContainer from './project_index_item_form_container';
import MembersModalContainer from '../modal/members_modal_container';
import DeleteProjectContainer from '../modal/delete_project_container';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.completion = this.completion.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.teamProjects.length < 1) {
      document.getElementById('demo-project-invite')
        .style.visibility = 'visible';
    }
  }

  handleDelete() {
    this.props.deleteProject(this.props.project.id);
  }

  toggleEdit() {
    this.setState({ editMode: true });
  }

  handleLeave() {
    this.props.destroyInvitedProject(
      this.props.project.id,
      this.props.currentUserId
    );
  }


  toggleDemoBtn(setting) {
    document.getElementById('demo-project-invite').style.visibility = setting;
  }

  deleteBtn() {
    return (
      <DeleteProjectContainer
        title={ this.props.project.title }
        projectId={ this.props.project.id }/>
    );
  }

  leaveBtn() {
    return (
      <span className="delete-project"
        onClick={ this.handleLeave.bind(this) }>
        <i className="fa fa-sign-out header-icon" aria-hidden="true"></i>
      </span>
    );
  }

  completion() {
    const { project } = this.props;
    if (project.stories.length === 0) {
      return 'no stories yet';
    } else {
      const completeStories = project.stories.filter(story => (
        story.internal_state === 'done'));
      const percentCompletion = Math.ceil(
        (completeStories.length / project.stories.length)*100
      );
      return `${percentCompletion}% complete`;
    }
  }

  render () {
    const { project, currentUserId } = this.props;
    const showURL = `/projects/${project.id}`;
    let removeBtn;
    let membersModal;
    let editBtn;

    if (project.creator_id === currentUserId) {
      removeBtn = this.deleteBtn();
      membersModal = <MembersModalContainer project={ project }/>;
      editBtn = <span className="update-project"
        onClick={ this.toggleEdit }>
        <i className="fa fa-pencil-square-o header-icon"
            aria-hidden="true"></i>
        </span>;
    } else {
      removeBtn = this.leaveBtn();
    }

    if (this.state.editMode) {
      return(
        <ProjectIndexItemFormContainer project={project} />
      );
    } else {
      return (
        <div className="project-index-item">
          <div className="project-index-item-header">
            <div className="project-index-item-title">
              <Link to={showURL}>
                { project.title }
              </Link>
            </div>
            <div className="header-action-btns">
              { membersModal }
              { removeBtn }
              { editBtn }

            </div>
          </div>
          <div className="project-index-body">
            <div className="percent-complete">
              { this.completion() }
            </div>
          </div>
        </div>
      );
    }
  }
}



export default ProjectIndexItem;
