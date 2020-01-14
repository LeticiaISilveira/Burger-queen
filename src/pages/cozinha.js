import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Components/Button'; 
import button from '../Components/button.css';
import swal from 'sweetalert';


function Submit(){
  const [count, setCount] = useState(0)

   useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    
  });
 
  return(
    
    <div>
      <p>You clicked {count} times </p>
      
      <Button title = {'Enviar'}  handleClick={() => swal ( " Pedido enviado com sucesso! " , " Quando tiver pronto nóis te fala. " , "success" ) }/> 

      
    </div>
  );
}

export default Submit;