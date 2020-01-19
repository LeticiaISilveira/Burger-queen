import React from 'react';

export default function CardOrder(props){
    return(
        <div className={'card-order'}>
            {props.amount}{' '}
            {props.name}{' '}
            R${props.price},00
            {props.timestamp}
            <button onClick={props.handleClickInc}>+</button>
            <button onClick={props.handleClickDec}>-</button>
       </div>
    )};
