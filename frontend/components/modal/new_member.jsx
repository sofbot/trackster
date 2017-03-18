import React from 'react';
import { fetchUser } from '../../util/invite_api_util';

class NewMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: ''
    };
    this.findFriend = this.findFriend.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  findFriend() {
    console.log(this.state.member);
    fetchUser(this.state.member).then(user => this.props.addMembers(user));
  }

  handleChange(e) {
    this.setState({ member: e.target.value });
  }

  render() {
    return (
      <form className="add-members-form">
        <label className="modal-label">Add teammates</label>
        <input className="modal-input"
          onChange={ this.handleChange }></input>
        <span onClick={ this.findFriend }>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </span>
      </form>
    );
  }
}

export default NewMember;
