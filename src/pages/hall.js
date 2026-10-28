import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Card from '../Components/Card';
import CardOrder from '../Components/CardOrder';
import swal from 'sweetalert';

export default function Hall() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('breakfast');
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  useEffect(() => {
    db.collection('menu').get().then((doc) => {
      const menuItems = doc.docs.map((snap) => ({
        ...snap.data()
      }));
      setData(menuItems);
    });
  }, []);

  const breakfast = data.filter((item) => item.isBreakfast);
  const burgerShop = data.filter((item) => !item.isBreakfast);
  const menu = category === 'breakfast' ? breakfast : burgerShop;

  const increaseItem = (item) => {
    setOrder((currentOrder) => {
      const existingItem = currentOrder.find((orderItem) => orderItem.name === item.name);
      if (!existingItem) {
        return [...currentOrder, { ...item, amount: 1 }];
      }
      return currentOrder.map((orderItem) => (
        orderItem.name === item.name
          ? { ...orderItem, amount: orderItem.amount + 1 }
          : orderItem
      ));
    });
  };

  const decreaseItem = (item) => {
    setOrder((currentOrder) => currentOrder
      .map((orderItem) => (
        orderItem.name === item.name
          ? { ...orderItem, amount: orderItem.amount - 1 }
          : orderItem
      ))
      .filter((orderItem) => orderItem.amount > 0));
  };

  const total = order.reduce((acc, item) => {
    return acc + (item.price * item.amount);
  }, 0);

  const submit = () => {
    db.collection('order').add({
      client,
      table,
      order,
      status: 'pendente',
      total,
      time: new Date().toLocaleString('pt-BR'),
      timeOrder: new Date().getTime()
    }).then(() => {
      swal('Pedido enviado com sucesso!', '', 'success');
      setOrder([]);
      setClient('');
      setTable('');
    });
  };

  return (
    <section className="hall" aria-labelledby="hall-heading">
      <h1 className="page-heading" id="hall-heading">Novo pedido</h1>
      <p className="page-subheading">Escolha os itens e confirme os dados da mesa.</p>
      <div className="choice" role="group" aria-label="Categoria do menu">
        <Button
          title="Café da manhã"
          id="breakfast"
          className="btn-coffee"
          ariaPressed={category === 'breakfast'}
          handleClick={() => setCategory('breakfast')}
        />
        <Button
          title="Hamburgueria"
          id="lunch"
          className="btn-burger"
          ariaPressed={category === 'burger'}
          handleClick={() => setCategory('burger')}
        />
      </div>
      <div className="menu">
        <div className="items-box">
          <div className="item">
            <h2 className="title-menu">Menu</h2>
            {menu.length ? menu.map((item) => (
              <Card
                key={item.name}
                className="btn-card"
                handleClick={() => increaseItem(item)}
                {...item}
              />
            )) : <p className="empty-order">Nenhum item disponível nesta categoria.</p>}
          </div>
        </div>
        <div className="order-box">
          <div className="order">
            <h2 className="order-title">Resumo do pedido</h2>
            <div className="data-order">
              <label className="field" htmlFor="table-number">
                Mesa
                <Input
                  id="table-number"
                  type="number"
                  min="1"
                  step="1"
                  className="input-table"
                  value={table}
                  onChange={(event) => setTable(event.target.value)}
                  placeholder="Nº"
                />
              </label>
              <label className="field" htmlFor="client-name">
                Cliente
                <Input
                  id="client-name"
                  type="text"
                  className="input-name"
                  value={client}
                  onChange={(event) => setClient(event.target.value)}
                  placeholder="Nome do cliente"
                />
              </label>
            </div>
            <div className="title-order" aria-hidden="true">
              <span>Qtd.</span><span>Item</span><span>Valor</span><span>+</span><span>-</span>
            </div>
            {order.length ? order.map((product) => (
              <CardOrder
                key={product.name}
                amount={product.amount}
                {...product}
                handleClickInc={() => increaseItem(product)}
                handleClickDec={() => decreaseItem(product)}
              />
            )) : <p className="empty-order">Adicione itens do menu para começar.</p>}
            <div className="total-order">
              <h2>Total</h2>
              <span className="total">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="submit">
        <Link className="btn-ready ready-link" to="/pedidosprontos">
          Ver pedidos prontos
        </Link>
        <Button
          title="Enviar pedido"
          className="btn-submit"
          disabled={!order.length || !client.trim() || !Number.isInteger(Number(table)) || Number(table) < 1}
          handleClick={submit}
        />
      </div>
    </section>
  );
}
