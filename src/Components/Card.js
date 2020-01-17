import React from 'react';
import Button from './Button';

function Card(props) {
  // const addItems=props.addItems;

  return (
    <>
    <div>
     <button class={props.className}  onClick={props.handleClick}>
          {props.name} <br />
          R${props.price},00
          {props.amount} 
          {/*  R$ {props.total},00 */}
      
    </button>
    </div>
    </>
  )
}


export default Card

