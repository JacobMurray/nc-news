import React from 'react';
import PropTypes from 'prop-types';

const Delete = props => {
  return (
    <div>
      <button onClick={() => props.handleClick(props.id)}>Delete</button>
    </div>
  );
};

Delete.propTypes = {
  id: PropTypes.string,
  handleClick: PropTypes.func
};

export default Delete;
