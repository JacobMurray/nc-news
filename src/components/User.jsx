import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Articles from './Articles';
import './css/user.css'

class User extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <h2>Hello {this.props.user.name}</h2>
                <img src={this.props.user.avatar_url} alt="avatar img" onError={e => e.target.src='http://thesweetpeople.com/wp/wp-content/uploads/2015/08/person_placeholder.png'} />
                <Articles
                path="/"
                sortBy={this.state.sortBy}
                user={this.props.user}
                userpage='selected'
              />
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object
};

export default User;