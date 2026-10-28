import React from 'react';
import ReactDOM from 'react-dom';
import{ BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .catch((error) => {
        console.error('Não foi possível registrar o suporte offline.', error);
      });
  });
}
