import React from 'react';

const NotFound = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.location.state.message}</h2>
      <h3>{props.location.state.code}</h3>
    </div>
  );
};

export default NotFound;
