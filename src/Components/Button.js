import React from 'react';

export default function Button(props) {
  return (
    <button
      id={props.id}
      className={props.className}
      aria-pressed={props.ariaPressed}
      disabled={props.disabled}
      onClick={props.handleClick}>{props.title}{props.addtitle}
    </button>
  )
}
