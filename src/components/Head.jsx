import React from 'react';
import './css/Head.css';
import PropTypes from 'prop-types';

const Head = ({user : {name, avatar_url}}) => {
    return (
        <div className='head'>
        <p>{name}</p>
        <img src={avatar_url} alt='avatar img'></img>
        </div>
    );
};

Head.propTypes = {
    user: PropTypes.object
}

export default Head;