import React from 'react';
import { Link } from 'react-router';
import { modalStyle } from './modal_style';
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
    console.log(this.props);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.addMembersToState = this.addMembersToState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.createProject(this.state).then(() => this.closeModal());
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

  addExistingMembers() {
    // const memberList = document.getElementById('members-list');
    // const newMember = document.createElement('li');
    // newMember.className = 'teammate auto';
    // newMember.innerHTML = member.username;
    // memberList.appendChild(newMember);
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
          style={ modalStyle }>
          <div className="members-modal-title">
            <h2> add / edit members</h2>
          </div>

            <label className="modal-label">Project Title</label>

          <MemberFormContainer
              memberIds={ this.state.memberIds }
              addMembersToState={ this.addMembersToState } />

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
