import React from 'react';
import { Link } from 'react-router';
import { modalStyle } from './modal_style';
import Modal from 'react-modal';

class CreateProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      title: '',
      description: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state).then(() => this.closeModal());
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  render() {
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
          <form className="create-project-form" onSubmit={ this.handleSubmit }>
            <label className="modal-label">Project Title</label>
            <input className="modal-input"
                    onChange={ this.update('title') }></input>
            <label className="modal-label">Description</label>
            <textarea className="modal-textarea"
                      onChange={ this.update('description') }></textarea>
            <i className="fa fa-floppy-o header-icon"
              onClick={ this.handleSubmit }
              aria-hidden="true">
              <input type="submit" value=""></input>
            </i>
          </form>
        </Modal>
      </div>
    );
  }
}


export default CreateProjectModal;
