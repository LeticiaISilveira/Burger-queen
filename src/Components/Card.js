import React from 'react';

function Card(props) {
  return (
    <button 
      class={props.className}
      onClick={props.handleClick}>{props.title}{props.addtitle}
    </button>
  )
}


export default Card

