import React from 'react';

export default function Card(props) {
  return (
    <>
    <div>
     <button class={props.className}  onClick={props.handleClick}>
          {props.name} <br />
          R${props.price},00
          {props.amount}  
    </button>
    </div>
    </>
  )
}


