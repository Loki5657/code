// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import InstagramLogin from 'react-instagram-login';
 
const responseInstagram = (response) => {
  console.log(response);
  window.location.href='/home'

}
const responseInstagram1= (response) => {
  console.log(response);

}
 
ReactDOM.render(
  <InstagramLogin
    clientId="08bb5b6287860336ee130c82b871e252"
    buttonText="Login"
    onSuccess={responseInstagram}
    onFailure={responseInstagram1}
  />,
  document.getElementById('root')
);
