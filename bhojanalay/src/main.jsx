import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import CartProvider
from "./context/CartContext";

import AuthProvider
from "./context/AuthContext";

import {
  ToastContainer
} from "react-toastify";

import
'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>

    <AuthProvider>

      <CartProvider>

        <App />

        <ToastContainer />

      </CartProvider>

    </AuthProvider>

  </React.StrictMode>,
)