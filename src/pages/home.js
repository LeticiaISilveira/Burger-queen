import { withRouter, Redirect } from "react-router-dom";
import React, { useState, Component, useEffect } from 'react';
//import Routes from './routes';
import ImgSalao from '../images/salao1.png';
import ImgCozinha from '../images/cozinha1.png';
import Button  from '../Components/Button'

const Option= ({ history }) => {
  // const route = () => <Routes />

  return (
    
    <div style={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>
      <button class='btn-home' type='image' src={ImgCozinha} style={{'margin-bottom':20, border:'none', backgroundColor:'transparent'}} onClick={() => history.push('/cozinha')}>
          <img src={ImgCozinha} alt="" style={{width:700}}></img>
      </button>
      <button style={{'margin-bottom':20, border:'none', backgroundColor:'transparent'}} onClick={() => history.push('/salao')}>
          <img src={ImgSalao} alt="" style={{width:700}}></img>
      </button>
        
    </div>
   
    // <div style={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>
    //     <Button class='btn-home' type='image' src={ImgCozinha} style={{'margin-bottom':20, border:'none', backgroundColor:'transparent'}} handleClick={() => history.push('/cozinha')}>
    //         <img src={ImgCozinha} alt="" style={{width:700}}></img>
    //     </Button>
    //     <Button style={{'margin-bottom':20, border:'none', backgroundColor:'transparent'}} handleClick={() => history.push('/salao')}>
    //         <img src={ImgSalao} alt="" style={{width:700}}></img>
    //     </Button>
        
    // </div>

  )
}


export default withRouter(Option);