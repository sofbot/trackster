import React from 'react';
import { Link } from 'react-router';
import { modalStyle } from './modal_style';
import Modal from 'react-modal';
import { values } from 'lodash';

class CreateProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      title: '',
      friend: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

  render() {
    let errs;
    if (values(this.props.errors).length > 0) {
      errs = <div className="errors modal-errors">
                { values(this.props.errors)[0].join(' & ') }
              </div>;
    } else {
      errs = <div></div>;
    }

    console.log(errs);
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
                  <label className="modal-label">Add friends</label>
            <input className="modal-input"
                      onChange={ this.update('friend') }></input>
          </form>
            <div className="modal-footer">
            <span className="close-modal"
              onClick={ this.closeModal }>
              <i className="fa fa-trash-o header-icon" aria-hidden="true"></i>
            </span>
            <i className="fa fa-floppy-o header-icon"
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
