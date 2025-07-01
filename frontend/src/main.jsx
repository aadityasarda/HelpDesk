import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router'; // we just created this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
