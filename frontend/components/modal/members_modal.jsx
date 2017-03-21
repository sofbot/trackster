import React from 'react';
import { Link } from 'react-router';
import { MembersModalStyle } from './members_modal_style';
import { values, merge } from 'lodash';
import Modal from 'react-modal';
import MemberFormContainer from './member_form_container';
import { fetchProject } from '../../util/projects_api_util';

class MembersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      memberIds: [],
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.addMembersToState = this.addMembersToState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const updates = merge({}, this.props.project, this.state);
    console.log(updates);
    this.props.updateProject(updates).then(() => this.closeModal());
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  addMembersToState(newMembers) {
    this.setState({ memberIds: newMembers });
  }

  getMembers(projectId) {
    const project = fetchProject(projectId);
    console.log(project);
  }

  render() {
    return (
      <span className="show-members">
        <i className="fa fa-user-plus header-icon"
            aria-hidden="true"
            onClick={ this.openModal } ></i>

        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          contentLabel="MembersModal"
          style={ MembersModalStyle }>
          <div className="create-project-modal-title">
            <h2> add / edit the { this.props.project.title } team</h2>
          </div>

          <MemberFormContainer
              memberIds={ this.state.memberIds }
              addMembersToState={ this.addMembersToState }
              members={ this.props.project.members }
              project={ this.props.project }/>

          <div className="modal-footer">
            <span className="close-modal"
              onClick={ this.closeModal }>
              <i className="fa fa-trash-o fa-2x header-icon"
                  aria-hidden="true"></i>
            </span>
            <i className="fa fa-floppy-o fa-2x header-icon"
              onClick={ this.handleSubmit }
              aria-hidden="true">
              <input type="submit" value=""></input>
            </i>
          </div>
        </Modal>
      </span>
    );
  }
}

export default MembersModal;
