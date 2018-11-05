import React from 'react';
import PropTypes from 'prop-types';

const DeleteComment = props => {
  return (
    <div>
      <button onClick={() => props.handleClick(props.id)}>Delete</button>
    </div>
  );
};

DeleteComment.propTypes = {
  id: PropTypes.string,
  handleClick: PropTypes.func
};

export default DeleteComment;
