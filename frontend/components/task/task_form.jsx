import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: 'Add a task',
      story_id: this.props.story.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  createTask() {
    this.props.createTask(this.state);
    this.clearForm();
  }

  clearForm(){
    document.getElementById("edit-task-input").innerHTML = "Add a task";
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <div className="task-list">
        <div className="task-left">
          <input type="checkbox"></input>
          <input className="edit-task-body"
                  id="edit-task-input"
                  onChange={ this.handleChange }
                  value={ this.state.body }></input>
        </div>

        <div className="task-save" onClick={ this.createTask }>
          <i className="fa fa-floppy-o" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default TaskForm;
