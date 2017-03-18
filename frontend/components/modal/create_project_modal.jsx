import React from 'react';
import { Link } from 'react-router';
import { modalStyle } from './modal_style';
import { values, merge } from 'lodash';
import Modal from 'react-modal';
import MemberForm from './member_form';

class CreateProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      title: '',
      memberIds: []
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.addMembersToState = this.addMembersToState.bind(this);
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

  render() {
    let errs;
    if (values(this.props.errors).length > 0) {
      errs = <div className="errors modal-errors">
                { values(this.props.errors)[0].join(' & ') }
              </div>;
    } else {
      errs = <div></div>;
    }

    return (
      <div className='dashboard-l-right'>
        <Link onClick={ this.openModal }>Create Project</Link>

        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          contentLabel="CreateProjectModal"
          style={ modalStyle }>
          <div className="create-project-modal-title">
            <h2>Create a new project</h2>
          </div>
          { errs }
          <form className="create-project-form" onSubmit={ this.handleSubmit }>
            <label className="modal-label">Project Title</label>
            <input className="modal-input"
                    onChange={ this.update('title') }></input>
          </form>

          <MemberForm memberIds={this.state.memberIds}
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
      </div>
    );
  }
}

export default CreateProjectModal;
