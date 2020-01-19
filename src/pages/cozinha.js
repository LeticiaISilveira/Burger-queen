import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import Button from '../Components/Button'; 
import H1 from '../Components/H1'
import button from '../Components/button.css';
import CardKitchen from '../Components/CardKitchen';

export default function Kitchen(){
  const [data, setData] = useState([]);
  // const [status, setStatus] = useState([]);
  
  useEffect(() => { 
    db
      .collection('order').orderBy('time')
      .get().then((doc => {
        const dataMenu = doc.docs.map((snap) => ({
          ...snap.data()
        }));
        setData(dataMenu);
      }))
    
    }, [])


    const pending = data.filter((item) => item.status === 'pendente');
    console.log(pending)

  return(
    
    <div>    
       <div> 
       <H1 className='request-title' title='PEDIDOS PENDENTES'/>            
      </div>
      <div className='container-card-kitchen'>
        {
          data.map((request) => 
          
          <>
          <CardKitchen
            {...request}
            // handleClick={()=> ready(request)
          /> 
          </>
          )              
        } 

      </div>
      <div>
        <Link to='/'><Button title = {'Voltar'} className={'btn-back-kitchen'}/></Link>
      </div>
    </div>
    
  );
}

