import React, { Component } from 'react';
import UserList from '../containers/user_list';
import UserDetails from '../containers/user_details';

export default class App extends Component {
  render() {
    return (
      <div className="row" >
        <div className="col-md-offset-2">
          <h3 className = "title-app"> Users Application </h3>
          <UserList />
          <UserDetails />
        </div>
      </div>
    );
  }
}
