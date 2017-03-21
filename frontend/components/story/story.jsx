import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: 'collapsed',
      title: 'Story title',
      story_type: 'feature',
      description: '',
      ice_boxed: true,
      internal_state: 'unstarted'
    }
    console.log(this.props);
    this.collapseStory = this.collapseStory.bind(this);
    this.expandStory = this.expandStory.bind(this);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  expandStory() {
    this.setState({ story: 'expanded'})
  }

  collapseStory() {
    this.setState({ story: 'collapsed'})
  }

  render() {
    if (this.state.story === 'collapsed') {
      return(
        <div className="story">
          <div className="story-icons">
            <i className="fa fa-folder-open-o"
                aria-hidden="true"
                onClick={ this.expandStory }></i>
            <i className="fa fa-code-fork" aria-hidden="true"></i>
          </div>
          <div className="story-title">
            { this.props.story.title }
          </div>
          <div className="story-buttons">
            <span>Start</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="expanded-story">
          <form className="expanded-story-form">
            <div className="expanded-story-title">
              <i className="fa fa-folder-o"
                  aria-hidden="true"
                  onClick={ this.collapseStory }></i>
              <input clasName="story-form-title"
                value={ this.state.title }
                onChange={ this.update('title') }></input>
            </div>
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
      )
    }
  }
}

export default Story;
