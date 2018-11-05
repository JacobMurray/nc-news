import React from 'react';
import PropTypes from 'prop-types';

const Logout = (props) => {
    return (
        <div>
            <button onClick={props.handleLogout}>Logout</button>
        </div>
    );
};

Logout.propTypes = {
    handleLogout: PropTypes.func
  };

export default Logout;