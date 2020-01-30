import {withRouter} from "react-router-dom";
import React from 'react';
import Routes from './routes';

const App = ({ history }) => {

  return (
    <div> 
      <Routes />
    </div>
  )
}

export default withRouter(App);