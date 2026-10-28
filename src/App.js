import React, { useEffect, useState } from 'react';
import Routes from './routes';
import Header from './Components/Header.js';
import './App.css';
import './pages/pages.css';

const App = () => {
  const [isOffline, setIsOffline] = useState(!window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="app">
      <Header></Header>
      <main className="app-main">
        {isOffline && (
          <div className="offline-notice" role="status" aria-live="polite">
            Sem conexão. Os dados já carregados continuam disponíveis; pedidos feitos offline serão
            sincronizados quando a conexão voltar.
          </div>
        )}
        <Routes />
      </main>
    </div>
  );
}

export default App;