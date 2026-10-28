import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import H1 from '../Components/H1'
import CardKitchen from '../Components/CardKitchen';

export default function Kitchen(){
  const [order, setOrder] = useState([]);

  useEffect(() => { 
    db
      .collection('order')
      .orderBy('time')
      .get().then((doc => {
        const dataMenu = doc.docs.map(snap => ({
          id:snap.id,
          ...snap.data()
        }));
        setOrder(dataMenu);
      }))
    
    }, [])

    const changeStatus = (item) => {
      const newtime = new Date().toLocaleString('pt-BR');
      db
        .collection('order')
        .doc(item.id)
        .update({
          status: 'pronto',
          newtime,
          newTimeOrder: new Date().getTime()
        })
        .then(() => {
          setOrder((currentOrder) => currentOrder.map((orderItem) => (
            orderItem.id === item.id
              ? { ...orderItem, status: 'pronto', newtime }
              : orderItem
          )));
        });
  }  
     
  const pendingOrders = order.filter((doc) => doc.status === 'pendente');

  return (
    <section aria-labelledby="kitchen-heading">
      <H1 id="kitchen-heading" className="request-title" title="Pedidos pendentes" />
      <p className="page-subheading">Prepare os pedidos e marque-os como prontos para retirada.</p>
      <div className="container-card-kitchen">
        {pendingOrders.length ? pendingOrders.map((doc) => (
          <CardKitchen
            key={doc.id}
            {...doc}
            handleClick={() => changeStatus(doc)}
          />
        )) : <p className="empty-orders">Tudo em dia. Não há pedidos pendentes.</p>}
      </div>
      <Link className="btn-back-kitchen back-link" to="/">
        Voltar ao início
      </Link>
    </section>
  );
}
