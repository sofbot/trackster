import React from 'react';
import { fetchUser } from '../../util/invite_api_util';
import Autocomplete from '../autocomplete/autocomplete';
import { values } from 'lodash';
import { withRouter } from 'react-router';

class MemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: ' '
    };
    this.findFriend = this.findFriend.bind(this);
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.initExistingMembers();
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleChange(value) {
    this.setState({ member: value });
  }

  findFriend(name) {
    let username;
    if (this.state.member === '' || typeof name === 'string') {
      username = name;
    } else {
      username = this.state.member;
    }

    fetchUser(username)
              .then((member => this.addMembers(member)),
                      err => this.displayError());
  }


  displayError() {
    document.getElementById('member-error').style.visibility = 'visible';
  }

  removeError() {
    document.getElementById('member-error').style.visibility = 'hidden';
  }


  addMembers(member) {
    const newMembers = this.props.memberIds.concat(member.id);

    if (this.props.memberIds.indexOf(member.id) === -1) {
      this.addMemberToList(member);
    }

    this.props.addMembersToState(newMembers);
    this.clearField();
    this.removeError();
  }

  initExistingMembers() {
    if (this.props.project && this.props.project.members) {
      this.props.project.members.forEach(member => this.addMemberToList(member));
    }
  }

  addMemberToList(member) {
    const memberList = document.getElementById('members-list');
    const newMember = document.createElement('li');
    newMember.className = 'teammate auto';
    newMember.innerHTML = member.username;

    newMember.addEventListener('click', e => this.handleDelete(e, member.id));
    memberList.appendChild(newMember);
    this.clearField();
  }

  handleDelete(e, memberId) {
    e.currentTarget.style.display = 'none';

    if (this.props.project.member_ids.includes(memberId)) {
      this.props.destroyInvite(memberId);
    }
  }

  clearField() {
    const field = document.getElementsByClassName('teammates-field')[0];
    field.value = "";
  }

  render() {
    return (
      <div className="members-container">
        <form className="add-members-form" onSubmit={ this.findFriend }>
          <div className="modal-inputs">
            <div className="member-input-label">
              <label className="modal-label">Add teammates</label>
              <span id="member-error" className="modal-label">
                member not found
              </span>
            </div>


          <Autocomplete
            names={ this.props.usernames }
            handleChange={ this.handleChange }
            findFriend={ this.findFriend }
            clearField={ this.clearField }
            members={ this.props.members }/>

          </div>
          <span onClick={ this.findFriend }></span>
        </form>
        <div className="members-list-container">
          <ul id="members-list"></ul>
        </div>
      </div>
    );
  }
}

export default withRouter(MemberForm);
