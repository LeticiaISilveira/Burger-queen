import React from 'react';

export default function CardKitchen(props){
    return(
        <div className={'card-kitchen'}>
            <p>Mesa: {props.table} Cliente: {props.client} </p>
            <h3>Pedido:  <br></br>{props.order.map(item =><>» {item.amount}: {item.name}<br /></>)}</h3>
            <p></p>
            <p>Status: {props.status}</p>
            <p>Pedido feito em: {props.time}</p>
            <button  className={'btn-status'} onClick={props.handleClick}>Marcar como Pronto</button>
       </div>

    )};
