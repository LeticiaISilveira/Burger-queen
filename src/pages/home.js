import { withRouter } from "react-router-dom";
import React from 'react';
import ImgSalao from '../images/salao1.png';
import ImgCozinha from '../images/cozinha1.png';

const Option= ({ history }) => {
  
  return (
    
    <div style={{display: 'flex', 'flex-direction': 'column', alignItems: 'center'}}>
      <button class='btn-home' type='image' src={ImgCozinha} style={{'margin-bottom':20, border:'none', backgroundColor:'transparent'}} onClick={() => history.push('/cozinha')}>
          <img src={ImgCozinha} alt="" style={{width:700}}></img>
      </button>
      <button style={{'margin-bottom':20, border:'none', backgroundColor:'transparent'}} onClick={() => history.push('/salao')}>
          <img src={ImgSalao} alt="" style={{width:700}}></img>
      </button>
        
    </div>

  )
}


export default withRouter(Option);