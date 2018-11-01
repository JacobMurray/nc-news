import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

const DeleteComment = props => {
    return (
        <div>
            <button onClick={api.deleteComment(props.id)}>Delete Comment</button>
        </div>
    );
};

DeleteComment.propTypes = {
    id: PropTypes.string
};

export default DeleteComment;