import React from 'react';
import './css/Head.css';
import PropTypes from 'prop-types';

const Head = ({user : {name, avatar_url}}) => {
    return (
        <div className='head'>
        <p> Logged in as: {name}</p>
        </div>
    );
};

Head.propTypes = {
    user: PropTypes.object
}

export default Head;