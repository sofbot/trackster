import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: this.props.task.complete,
      body: this.props.task.body,
      story_id: this.props.task.story_id,
      id: this.props.task.id,
      edit: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  componentDidMount() {
    this.box.checked = (this.props.task.complete ? 'checked' : '')
  }

  toggleEdit() {
    const toggle = (this.state.edit === false ? true : false);
    this.setState({ edit: toggle });
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleComplete(e) {
    const completion = (this.state.complete ? false : true)
    this.setState({ complete: completion }, () => this.props.updateTask(this.state));
  }

  updateTask() {
    this.props.updateTask(this.state)
              .then(this.toggleEdit());
  }

  handleDelete() {
    this.props.destroyTask(this.state)
              .then(task => this.props.removeTask(task))
              .then(this.clearForm());
  }

  clearForm(){
    document.getElementById("edit-task-input").innerHTML = "Add a task";
  }

  render() {
    if (this.state.edit === true) {
      return (
        <div className="task-list">
          <div className="task-left">
            <input className="edit-task-body"
              onChange={ this.handleChange }
              value={ this.state.body }></input>
          </div>
          <div className="task-save" onClick={ this.updateTask }>
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="task-list">
          <div className="task-left">
            <input type="checkbox"
                    onChange={ this.handleComplete }
                    ref={ node => this.box = node }></input>
            <div className="task-body" onClick={ this.toggleEdit }>
              { this.props.task.body }
            </div>
          </div>
          <div className="task-delete" onClick={ this.handleDelete }>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </div>
        </div>
      );
    }
  }
}

export default Task;
