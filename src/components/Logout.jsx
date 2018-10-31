import React from 'react';

const Logout = (props) => {
    return (
        <div>
            <button onClick={props.handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;