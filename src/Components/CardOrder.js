import React from 'react';

export default function CardOrder(props){
    return(
        <div className="card-order">
            <div>{props.amount}</div>
            <div>{props.name}</div>
            <div>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price * props.amount)}</div>
            <button type="button" aria-label={`Adicionar ${props.name}`} onClick={props.handleClickInc}>+</button>
            <button type="button" aria-label={`Remover ${props.name}`} onClick={props.handleClickDec}>−</button>
       </div>
    )};
