import React from 'react';
import { Link } from 'react-router';
import { destroyInvite } from '../../util/invite_api_util';
import ProjectIndexItemFormContainer from './project_index_item_form_container';
import MembersModalContainer from '../modal/members_modal_container';

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.teamProjects.length < 1) {
      document.getElementById('demo-project-invite').style.visibility = 'visible';
    }
  }

  handleDelete() {
    this.props.deleteProject(this.props.project.id);
  }

  toggleEdit() {
    this.setState({ editMode: true });
  }

  handleLeave() {
    this.props.destroyInvite(this.props.project.id);
  }


  toggleDemoBtn(setting) {
    document.getElementById('demo-project-invite').style.visibility = setting;
  }

  deleteBtn() {
    return (
      <span className='delete-project'
        onClick={ this.handleDelete }>
        <i className="fa fa-trash-o header-icon" aria-hidden="true"></i>
      </span>
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


  render () {
    const showURL = `/projects/${this.props.project.id}`;
    let removeBtn;
    let membersModal;

    if (this.props.project.creator_id === this.props.currentUserId) {
      removeBtn = this.deleteBtn();
      membersModal = <MembersModalContainer project={ this.props.project }/>;
    } else {
      removeBtn = this.leaveBtn();
    }



    if (this.state.editMode) {
      return(
        <ProjectIndexItemFormContainer project={this.props.project} />
      );
    } else {
      return (
        <div className="project-index-item">
          <div className="project-index-item-header">
            <div className="project-index-item-title">
              <Link to={showURL}>
                { this.props.project.title }
              </Link>
            </div>
            <div className="header-action-btns">
              { membersModal }
              { removeBtn }
              <span className="update-project"
                onClick={ this.toggleEdit }>
                <i className="fa fa-pencil-square-o header-icon"
                    aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="project-index-body">
            <p> % progress goes here, mby member list too </p>
          </div>
        </div>
      );
    }
  }
}



export default ProjectIndexItem;
