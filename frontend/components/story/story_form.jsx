import React from 'react';
import { Link } from 'react-router';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Story title',
      story_type: 'feature',
      description: '',
      ice_boxed: true
    };
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  render() {
    return(
      <div className="story-form-container">
        <form className="story-form">

          <input className="story-form-title"
                value={ this.state.title }
                onChange={ this.update('title') }></input>
          <select onChange={ this.update('story_type') }>
            <option value={ this.state.story_type }></option>
            <option value='Bug'></option>
            <option value='Chore'></option>
            <option value='Release'></option>
          </select>
          <label>description</label>
          <textarea onChange={ this.update('description') }></textarea>
        </form>
      </div>
    );
  }
}

export default StoryForm;
