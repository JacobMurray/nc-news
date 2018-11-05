import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/user.css'

class User extends Component {
    state = {
        
    }
    render() {
        return (
            <div>
                <h3>hello</h3>
                <img src={this.props.user.avatar_url} alt="avatar img" onError={e => e.target.src='http://thesweetpeople.com/wp/wp-content/uploads/2015/08/person_placeholder.png'} />
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object
};

export default User;