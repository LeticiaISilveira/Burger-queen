import React from 'react';

export default function CardReady(props){
    return(
        <div className={'card-options-orders'}>
            <p>Mesa: {props.table} Cliente: {props.client} </p>
            <h3>Pedido:  <br></br>{props.order.map(item =><>» {item.amount}: {item.name}<br /></>)}</h3>
            <p></p>
            <p>Status: {props.status}</p>
            <p>Pedido pronto em: {props.newtime}</p>
            <button  className={'btn-status'} onClick={props.handleClick}>Marcar como Entregue</button>
       </div>

    )};
