import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render () {
        const {currentUser} = this.props;
        if (Object.keys(currentUser).length === 0 ) {
            return (
                <div className="col-md-4"> <h4>Selectionnez un utilisateur</h4></div>
            )
        }
        return (
            <div className="col-md-4">
                <h4>Detail de {currentUser.name}</h4>
                <ul className="list-group details-user">
                    <li > Id: {currentUser.id} </li>
                    <li > Role: {currentUser.role} </li>
                    <li > Active: {currentUser.active? "Oui": "Non"} </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);