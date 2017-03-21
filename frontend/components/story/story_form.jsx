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

    this.handleClose = this.handleClose.bind(this);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleClose() {
    this.props.hideForm();
  }

  render() {
    return(
      <div className="story-form-container">
        <form className="story-form">
          <span className="close-container" onClick={ this.handleClose }>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
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
