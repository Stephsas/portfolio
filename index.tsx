import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/styles/index.css';
import App from './src/App';
import './src/styles/App.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



