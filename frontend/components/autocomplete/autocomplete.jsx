import React from 'react';
import { getUsernames } from '../../reducers/selectors';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };

    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.filterMatches = this.filterMatches.bind(this);
  }

  filterMatches(match) {
    return !this.props.members.includes(match);
  }

  matches() {
    const matches = [];

    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (this.state.inputVal === "") {
      return [];
    } else {
      let filteredMatches = matches;

      if (this.props.members) {
        filteredMatches = matches.filter(this.filterMatches);
      }

      return filteredMatches;
    }
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
    this.props.handleChange(event.currentTarget.value);

    if (this.props.names.includes(event.currentTarget.value)) {
      this.clearName(event.currentTarget.value);
    }
  }


  selectName(event) {
    this.setState({ inputVal: event.currentTarget.innerText });
    this.clearName(event.currentTarget.innerText);
    this.props.findFriend(event.currentTarget.innerText);
  }

  clearName(name) {
    let index = this.props.names.indexOf(name);
    this.props.names.splice(index, 1);
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} className="auto" onClick={this.selectName}>{ result }</li>
      );
    });
    return (
      <div className='auto-container'>
        <input className="modal-input teammates-field"
              onChange={ this.handleInput }
              value={ this.state.inputVal } />
        <ul id="autocomplete-results">
          { results }
        </ul>
      </div>
    );
  }


}

export default Autocomplete;
