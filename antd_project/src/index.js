import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "antd/dist/antd.css";

// import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './Components/Customer/Route/route';
// import Customer from './Components/Customer/customer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router/>
  {/* <Customer/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
