import React from 'react';
import './css/Head.css';
import PropTypes from 'prop-types';

const Head = ({user}) => {
    return (
        <div className='head'>
        <p>{user}</p>
        </div>
    );
};

Head.propTypes = {
    user: PropTypes.string
}

export default Head;