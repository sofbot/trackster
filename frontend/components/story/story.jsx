import React from 'react';
import DeleteModalContainer from '../modal/delete_modal_container';

const stateTransform = {
  'unstarted': 'start',
  'start': 'finish',
  'finish': 'deliver',
  'deliver': 'accept/reject',
  'reject': 'restart',
  'restart': 'finish',
  'accept': 'done'
};


class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: 'collapsed',
      title: '',
      story_type: '',
      description: '',
      ice_boxed: '',
      internal_state: '',
      id: ''
    };
    this.collapseStory = this.collapseStory.bind(this);
    this.expandStory = this.expandStory.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount(nextProps) {
    this.setState({
      story: 'collapsed',
      title: `${this.props.story.title}`,
      story_type: `${this.props.story.story_type}`,
      description: `${this.props.story.description}`,
      ice_boxed: `${this.props.story.ice_boxed}`,
      internal_state: `${this.props.story.internal_state}`,
      id: `${this.props.story.id}`
    });
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
    this.props.updateStory(this.state);
  }

  toggleState(e) {
    this.setState({
      internal_state: stateTransform[this.props.story.internal_state]
    }, this.updateState);
  }

  render() {
    if (this.state.story === 'collapsed') {
      return(
        <div className="story">
          <div className="story-icons"
                onClick={ this.expandStory }>
            <i className="fa fa-folder-open-o"
                aria-hidden="true"></i>
            <i className="fa fa-code-fork" aria-hidden="true"></i>
          </div>
          <div className="story-title">
            { this.state.title }
          </div>

          <div className="story-buttons" onClick={ this.toggleState }>
            { stateTransform[this.props.story.internal_state] }
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

            <div className="story-form-btns">
              <DeleteModalContainer story={ this.props.story }/>
              <span className="cancel-btn"
                onClick={ this.collapseStory }>Cancel</span>
              <span className="story-submit-btn"
                onClick={ this.collapseStory }>Save</span>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Story;
