import React from 'react';
import Routes from './routes';
import Header from './Components/Header.js';
import './App.css';
import './pages/pages.css';

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <main className="app-main">
        <Routes />
      </main>
    </div>
  );
}

export default App;