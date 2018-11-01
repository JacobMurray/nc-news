import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class DeleteComment extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>Delete Comment</button>
            </div>
        );
    }

    handleClick = () => {
        api.deleteComment(this.props.id)
        this.forceUpdate()
    }
}

DeleteComment.propTypes = {
    id: PropTypes.string
};

export default DeleteComment;