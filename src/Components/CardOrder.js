import React from 'react';

export default function CardOrder(props){
    return(
        <div className onClick={props.handleClick}>
            {props.name}
            {props.amount}
             R${props.price},00
            {props.timestamp}
            <button onClick={props.handleClick}>+</button>
            <button onClick={props.handleClick}>-</button>
       </div>
    )};
