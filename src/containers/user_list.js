import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectUser } from '../actions/index';

class UserList extends Component {
    
    render () {
        return (
            <div>
                <ul className="col-md-4">
                    {
                        this.props.myUsers.map( user => {
                            return (
                                <li className="list-group-item" key={user.id} onClick={ () => this.props.selectUser(user) } >{user.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        myUsers: state.users
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators( {selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
//export default UserList;