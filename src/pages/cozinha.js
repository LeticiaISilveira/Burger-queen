import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Components/Button'; 
import button from '../Components/button.css';
import swal from 'sweetalert';


function Submit(){
  const [count, setCount] = useState(0)

   useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    document.title =  swal ( " Pedido enviado com sucesso! " , " Quando tiver pronto nóis te fala. " , "success" ) ;
  });
 
  return(
    
    <div>
      <p>You clicked {count} times </p>
      
      <button onClick={() => setCount(count + 1)}> 
      [Enviar Pedido] Quando clicar, enviar lista para a cozinha o que efeito colateral, incorporar esse swal
      </button>
    </div>
  );
}

export default Submit;