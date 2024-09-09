import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyCQXC31JssZ1tirfwsJc4wTiPAjHx1d3E0",
  authDomain: "react-js-coder-e588d.firebaseapp.com",
  projectId: "react-js-coder-e588d",
  storageBucket: "react-js-coder-e588d.appspot.com",
  messagingSenderId: "102663031071",
  appId: "1:102663031071:web:5e5f713fe3b6ef6674082a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
