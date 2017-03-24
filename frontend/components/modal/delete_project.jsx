import React from 'react';
import { DeleteModalStyle } from './delete_modal_style';
import Modal from 'react-modal';

class DeleteProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
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
      this.props.deleteProject(this.props.projectId)
                .then(this.closeModal());
  }

  render() {
    return (
      <span className="delete-modal" onClick={ this.openModal }>
        <span className='delete-project'
          onClick={ this.handleDelete }>
          <i className="fa fa-trash-o header-icon" aria-hidden="true"></i>
        </span>

        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          contentLabel="DeleteModal"
          style={ DeleteModalStyle }>
          <div className="create-project-modal-title">
            <h2> Delete Project</h2>
          </div>
          <div className="delete-modal-body">
            <div className="delete-modal-content">
              <span className="delete-modal-item">
                <i className="fa fa-code-fork" aria-hidden="true"></i>
                { this.props.title }
              </span>
            </div>
          </div>

          <div className="modal-footer delete-footer">
            <span className="submit-delete delete-footer-btn"
                  onClick={ this.handleSubmit }
                  aria-hidden="true"> Delete </span>
            <span className="delete-footer-btn delete-close"
              onClick={ this.closeModal }> Cancel </span>
          </div>
        </Modal>
      </span>
    );
  }
}

export default DeleteProjectModal;
