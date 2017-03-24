import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../../util/constants.js';
import { DragSource } from 'react-dnd';
import DeleteModalContainer from '../modal/delete_modal_container';
import TaskContainer from '../task/task_container';
import TaskFormContainer from '../task/task_form_container';
import { merge } from 'lodash';
import { findDOMNode } from 'react-dom';

const stateTransform = {
  'unstarted': 'start',
  'start': 'finish',
  'finish': 'deliver',
  'deliver': 'accept/reject',
  'restart': 'finish',
  'reject': 'restart',
  'done': 'restart'
};

const storySource = {
  beginDrag(props) {
    return {
      storyId: props.story.id,
      internal_state: props.story.internal_state
    };
  },
  endDrag(props, monitor, component) {
    if (props.lastTarget) {
      props.lastTarget.style.marginTop = '0';
    }

    if (!props.dropTarget){
      return;
    } else {
      let destination = props.dropTarget.props.story;
      let updatedStory = merge({}, props.story);

      updatedStory.priority = (destination.priority - 1);
      props.updateStory(updatedStory)
            .then(() => props.fetchAllStories(props.story.project_id));
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: 'collapsed',
      title: '',
      story_type: '',
      description: '',
      ice_boxed: '',
      internal_state: '',
      id: '',
      tasks: [],
      selected: 'false'
    };

    this.collapseStory = this.collapseStory.bind(this);
    this.expandStory = this.expandStory.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateState = this.updateState.bind(this);
    this.toggleIceBoxed = this.toggleIceBoxed.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  componentDidMount() {
    this.setState({
      story: 'collapsed',
      title: this.props.story.title,
      story_type: this.props.story.story_type,
      description: this.props.story.description,
      ice_boxed: this.props.story.ice_boxed,
      internal_state: this.props.story.internal_state,
      id: this.props.story.id,
      tasks: this.props.story.tasks
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.story.tasks !== this.state.tasks) {
      this.setState({ tasks: nextProps.story.tasks });
    }
  }

  removeTask(removedTask) {
    let taskIdx = this.state.tasks.findIndex(task => task.id === removedTask.id);
    let newState = merge({}, this.state);
    newState.tasks.splice(taskIdx, 1);
    this.setState({ tasks: newState.tasks });
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  expandStory() {
    this.setState({ story: 'expanded'});
  }

  collapseStory() {
    this.setState({ story: 'collapsed'});
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateStory(this.state).then(this.collapseStory());
  }

  handleDelete() {
    this.props.destroyStory();
  }

  updateState() {
    let updatedStory = merge({}, this.props.story);
    updatedStory.internal_state = this.state.internal_state;
    updatedStory.ice_boxed = this.state.ice_boxed;
    this.props.updateStory(updatedStory);
  }

  toggleIceBoxed() {
    this.setState({ ice_boxed: false }, this.updateState);
  }

  toggleState(e) {
    if (e.target.innerHTML === 'accept') {
      this.setState({ internal_state: 'done' }, this.updateState);
    } else if (e.target.innerHTML === 'Reject') {
      this.setState({ internal_state: 'reject' }, this.updateState);
    } else {
      this.setState({
        internal_state: stateTransform[this.props.story.internal_state]
      }, this.toggleIceBoxed);
    }
  }

  render() {
    const stateBtn = () => {
      if ( stateTransform[this.props.story.internal_state] === 'accept/reject') {
        return (
          <div className="accept-reject-btns">
            <span className='accept'>accept</span>
            <span className='reject'>Reject</span>
          </div>
        );
      } else {
        return (
          <span className={ stateTransform[this.props.story.internal_state] }>
            { stateTransform[this.props.story.internal_state] }
          </span>
        );
      }
    };

    if (this.state.story === 'collapsed') {
      const { connectDragSource, isDragging } = this.props;

      return connectDragSource(
        <div className="story"
              style={{
                  opacity: (isDragging ? 0.3 : 1),
                  borderTop: (isDragging ? '1px dashed black' : '1px solid #fff'),
                  borderBottom: (isDragging ? '1px dashed black' : '1px solid #ddd'),
                  borderLeft: (isDragging ? '1px dashed black' : 'none'),
                  borderRight: (isDragging ? '1px dashed black' : 'none')
                }} >
          <div className="story-icons"
                onClick={ this.expandStory }>
            <i className="fa fa-folder-open-o"
                aria-hidden="true"></i>
            <i className="fa fa-code-fork" aria-hidden="true"></i>
          </div>
          <div className="story-title">
            { this.props.story.title }
          </div>

          <div className="story-buttons" onClick={ this.toggleState }>
            { stateBtn() }
          </div>
        </div>
      );
    } else {
      return (
        <div className="story-form-container">
          <form className="story-form" onSubmit={ this.handleUpdate }>
            <div className="story-form-top">
              <div className="form-close-container expanded-form-close-container">
                <i className="fa fa-folder-o"
                  aria-hidden="true"
                  onClick={ this.collapseStory }></i>
              </div>

              <input className="story-form-title expanded-form-title"
                value={ this.state.title }
                onChange={ this.update('title') }></input>
            </div>
            <div className="select-story-type">
              <em>Story Type</em>
              <select value={ this.state.story_type } onChange={ this.update('story_type') }>
                <option defaultValue="feature">feature</option>
                <option value='Bug'>bug</option>
                <option value='Chore'>chore</option>
                <option value='Release'>release</option>
              </select>
            </div>

            <div className="story-description-field">
              <label>description</label>
              <textarea onChange={ this.update('description') }
                        value={ this.state.description }></textarea>
            </div>

            <div className="tasks-container">
              <h4>tasks</h4>
              {
                this.props.story.tasks.map((task, idx) => (
                  <TaskContainer task={ task }
                                  key={ task.id }
                                  removeTask={ this.removeTask } />
                ))
              }
              <TaskFormContainer story={ this.props.story } />
            </div>

            <div className="story-form-btns">
              <DeleteModalContainer title={ this.props.story.title }
                                    storyId={ this.props.story.id }/>
              <span className="cancel-btn"
                onClick={ this.collapseStory }>Cancel</span>
              <span className="story-submit-btn"
                onClick={ this.handleUpdate }>Save</span>
            </div>
          </form>
        </div>
      );
    }
  }
}

Story.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.STORY, storySource, collect)(Story);
