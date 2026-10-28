import { withRouter } from "react-router-dom";
import React from 'react';
import ImgSalao from '../images/salao1.png';
import ImgCozinha from '../images/cozinha1.png';

const Option = ({ history }) => {
  return (
    <section className="home-page" aria-labelledby="home-heading">
      <h1 className="page-heading home-heading" id="home-heading">Bem-vindo à Burger Queen</h1>
      <p className="home-intro">Escolha onde deseja trabalhar</p>
      <div className="home-options">
        <button className="home-option" type="button" onClick={() => history.push('/cozinha')}>
          <img src={ImgCozinha} alt="" />
          <span>Cozinha</span>
        </button>
        <button className="home-option" type="button" onClick={() => history.push('/salao')}>
          <img src={ImgSalao} alt="" />
          <span>Atendimento</span>
        </button>
      </div>
    </section>
  )
}


export default withRouter(Option);