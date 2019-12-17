
// import ImgSalao from './images/salao.png';
// import ImgCozinha from './images/cozinha.jpg';

// import firebase from '../Components/Firebase/firebase';
// import Button from '../Components/button';
// import Input from '../Components/input';
// import Title from '../Components/title';


// function Option() {

//     return (
//     <div>
//         <h1>Página inicial com Option - </h1>

    
//       {/* <button onClick={() => history.push('/salao')}>
//         <img src={ImgSalao} alt=""></img>
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         <img src={ImgCozinha} alt=""></img>
//       </button> */}
    
//     </div>
  
//   );
// }

// export default Option

import { withRouter, Redirect } from "react-router-dom";
import React, { useState, Component, useEffect } from 'react';
// import Routes from './routes';
import ImgSalao from '../images/salao.png';
import ImgCozinha from '../images/cozinha.jpg';

const Option= ({ history }) => {
  // const route = () => <Routes />

  return (
    
    <div style={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>>
    
        <button  style={{borderRadius:20, 'margin-bottom':20 }} onClick={() => history.push('/salao')}>
            <img src={ImgSalao} alt="" style={{width:380, borderRadius:20}}></img>
        </button>
        <button style={{borderRadius:20 }} onClick={() => history.push('/cozinha')}>
            <img src={ImgCozinha} alt="" style={{width:380, borderRadius:20}}></img>
        </button>

    </div>

  )
}


export default withRouter(Option);