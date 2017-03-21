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

  handleSubmit() {
    e.preventDefault();
    this.props.createStory(this.props.project.id, this.state).then(this.props.hideForm());
  }

  render() {
    return(
      <div className="story-form-container">
        <form className="story-form" onSubmit={ this.handleSubmit }>
          <span className="close-container" onClick={ this.props.hideForm }>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
          <input className="story-form-title"
                value={ this.state.title }
                onChange={ this.update('title') }></input>

          <select value={ this.state.story_type } onChange={ this.update('story_type') }>
            <option defaultValue="feature">feature</option>
            <option value='Bug'>bug</option>
            <option value='Chore'>chore</option>
            <option value='Release'>release</option>
          </select>

          <label>description</label>
          <textarea onChange={ this.update('description') }></textarea>
          <input type="submit" value="save"></input>
        </form>
      </div>
    );
  }
}

export default StoryForm;
