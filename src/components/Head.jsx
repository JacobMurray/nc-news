import React from 'react';
import './css/Head.css';

const Head = ({user}) => {
    return (
        <div className='head'>
        <p>{user}</p>
        </div>
    );
};

export default Head;