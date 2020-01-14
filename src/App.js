import {withRouter} from "react-router-dom";
import React from 'react';
import Routes from './routes';
import Header from './Components/Header.js';

const App = ({ history }) => {

  return (
    <div> 
      <Header></Header>
      <Routes />
    </div>
  )
}

export default withRouter(App);