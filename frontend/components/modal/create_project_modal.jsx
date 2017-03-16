import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11
  }
};

class CreateProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      projectName: '',
      projectDescription: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
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

  changeTitle(e) {
    this.setState({ title: e.target.value });
  }

  changeDescription(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <div className='dashboard-l-right'>
        <Link onClick={ this.openModal }>Create Project</Link>

        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          contentLabel="CreateProjectModal"
          style={ style }>

          <h2>Create a new project</h2>
          <form className="create-project-form" onSubmit={ this.handleSubmit }>
            <label className="modal-label">Project Name</label>
            <input className="modal-input"
              onChange={ this.changeTitle }></input>
            <label className="modal-label">Description</label>
            <textarea className="modal-textarea"
              onChange={ this.changeDescription }></textarea>
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
