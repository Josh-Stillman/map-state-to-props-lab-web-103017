import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          {this.props.users.map(user => <li>{user.userName} from {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {users: store.users, primaryUser: store.users[0]}
}

export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
