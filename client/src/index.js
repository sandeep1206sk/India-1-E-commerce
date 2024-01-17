import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './context/Context';
import "antd/dist/reset.css";
import { SearchProvider } from './context/Search';
import { CartProvider } from './context/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
  <BrowserRouter>
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </CartProvider>
  </SearchProvider>
  </AuthProvider>
);

reportWebVitals();
