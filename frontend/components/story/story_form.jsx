import React from 'react';
import { Link } from 'react-router';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Story title',
      story_type: 'feature',
      description: '',
      ice_boxed: true,
      internal_state: 'unstarted'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createStory(this.props.project.id, this.state).then(this.props.hideForm());
  }

  render() {
    return(
      <div className="story-form-container">
        <form className="story-form" onSubmit={ this.handleSubmit }>
          <div className="story-form-top">
            <input className="story-form-title"
              value={ this.state.title }
              onChange={ this.update('title') }></input>

            <span className="form-close-container" onClick={ this.props.hideForm }>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>

          <div className="select-story-type">
            <em>Story Type</em>
            <select value={ this.state.story_type } onChange={ this.update('story_type') }>
              <option defaultValue="feature"
                      className="select-feature">feature</option>
              <option value='Bug'>bug</option>
              <option value='Chore'>chore</option>
              <option value='Release'>release</option>
            </select>
          </div>

          <div className="story-description-field">
            <label>description</label>
            <textarea onChange={ this.update('description') }></textarea>
          </div>

          <div className="story-form-btns">
            <span onClick={ this.props.hideForm }
                  className="cancel-btn">cancel</span>
            <span className="story-submit-btn"
                  onClick={ this.handleSubmit }>Save</span>
          </div>
        </form>
      </div>
    );
  }
}

export default StoryForm;
