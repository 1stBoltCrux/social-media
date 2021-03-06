import React, {Component} from 'react';

function Suggestion(props){
  return(
    <div className='suggestion-wrapper'>
      <div className='suggestion-image'></div>
      <div className='suggestion-content'>
        <h3>{props.name}</h3>
        <div className='suggestion-button'><p>Button</p></div>
      </div>
    </div>
  );
}

export default Suggestion;
