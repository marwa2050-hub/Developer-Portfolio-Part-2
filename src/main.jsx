import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // اگر می‌خوای global استایل باشه

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
