import React from 'react';

export default function CardReady(props) {
  return (
    <article className="card-options-orders">
      <p className="order-customer">Mesa {props.table} · {props.client}</p>
      <ul className="order-items">
        {props.order.map((item) => (
          <li key={item.name}>{item.amount} × {item.name}</li>
        ))}
      </ul>
      <p className="order-time">Pronto em: {props.newtime}</p>
      <button className="btn-status" type="button" onClick={props.handleClick}>
        Marcar como entregue
      </button>
    </article>
  );
}
