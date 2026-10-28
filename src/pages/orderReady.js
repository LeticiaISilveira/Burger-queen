import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import Button from '../Components/Button';
import CardDelivered from '../Components/CardDelivered';
import CardReady from '../Components/CardReady';

export default function OrderReady() {
  const [data, setData] = useState([]);
  const [showDelivered, setShowDelivered] = useState(false);

  useEffect(() => {
    db.collection('order').get().then((doc) => {
      const orders = doc.docs.map((snap) => ({
        id: snap.id,
        ...snap.data()
      }));
      setData(orders);
    });
  }, []);

  const changeStatus = (item) => {
    const deliveredTime = new Date().toLocaleString('pt-BR');
    db.collection('order').doc(item.id).update({
      status: 'entregue',
      deliveredTime
    }).then(() => {
      setData((currentData) => currentData.map((order) => (
        order.id === item.id
          ? { ...order, status: 'entregue', deliveredTime }
          : order
      )));
    });
  };

  const visibleOrders = data.filter((item) => (
    showDelivered ? item.status === 'entregue' : item.status === 'pronto'
  ));

  return (
    <section aria-labelledby="ready-heading">
      <h1 className="page-heading" id="ready-heading">Pedidos para retirada</h1>
      <p className="page-subheading">Acompanhe os pedidos prontos e confirme a entrega ao cliente.</p>
      <div className="choice-order" role="group" aria-label="Filtrar pedidos">
        <Button
          title="Prontos"
          id="ready"
          className="choice-ready"
          ariaPressed={!showDelivered}
          handleClick={() => setShowDelivered(false)}
        />
        <Button
          title="Entregues"
          id="delivered"
          className="choice-delivered"
          ariaPressed={showDelivered}
          handleClick={() => setShowDelivered(true)}
        />
      </div>
      <div className="container-card-kitchen">
        {visibleOrders.length ? visibleOrders.map((item) => (
          showDelivered
            ? <CardDelivered key={item.id} {...item} />
            : <CardReady key={item.id} {...item} handleClick={() => changeStatus(item)} />
        )) : (
          <p className="empty-orders">
            {showDelivered ? 'Ainda não há pedidos entregues.' : 'Ainda não há pedidos prontos.'}
          </p>
        )}
      </div>
      <Link className="btn-back-kitchen back-link" to="/">
        Voltar ao início
      </Link>
    </section>
  );
}
