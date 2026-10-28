import React from 'react';

export default function Card(props) {
  return (
    <button className={props.className} type="button" onClick={props.handleClick}>
      <span>{props.name}</span>
      <br />
      <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)}</span>
    </button>
  )
}

