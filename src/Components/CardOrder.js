import React from 'react';

export default function CardOrder(props){
    return(
        <div className={'card-order'}>
            <div>{props.amount}</div>
            <div>{props.name} </div>
            <div>R${props.price},00 </div>         
            {props.timestamp}
            <div>
            <button className={'btn-amount'} onClick={props.handleClickInc}>+</button>
            <button className={'btn-amount'} onClick={props.handleClickDec}>-</button>
            </div>
       </div>
    )};
