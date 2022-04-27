import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login/login'

// import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard from './Dashboard/Dashboard'



// ReactDOM.render(
//   <React.StrictMode>
//     <Login/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM
.createRoot(document.getElementById('root'))
.render(<Login/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();