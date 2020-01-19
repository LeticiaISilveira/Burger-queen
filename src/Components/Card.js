import React from 'react';
import Button from './Button';

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


