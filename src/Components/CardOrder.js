import React from 'react';

export default function CardOrder(props){
    return(
        <div className={'card-order'}>
            <div>{props.amount}</div>
            <div>{props.name} </div>
            <div>R${props.price},00 </div>         
            {props.timestamp}
            <div>
            <button onClick={props.handleClickInc}>+</button>
            <button onClick={props.handleClickDec}>-</button>
            </div>
       </div>
    )};
