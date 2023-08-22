import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles.css';
import { App } from './components/app/app';

ReactDOM.createRoot(document.querySelector('.container')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
