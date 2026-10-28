import React from 'react';

export default function CardDelivered(props) {
  return (
    <article className="card-options-orders">
      <p className="order-customer">Mesa {props.table} · {props.client}</p>
      <ul className="order-items">
        {props.order.map((item) => (
          <li key={item.name}>{item.amount} × {item.name}</li>
        ))}
      </ul>
      <p className="order-time">Entregue em: {props.deliveredTime}</p>
    </article>
  );
}
