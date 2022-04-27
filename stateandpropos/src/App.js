import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [userName, setUserName] = useState(" ")
  const [password, setPassword] = useState(" ")
 

  const getInputValue = (event) => {
    setUserName(event.target.value)
    // console.log(userName)

  }
  const getInputpassword = (event) => {

    setPassword(event.target.value)
    // console.log(password)
  }
 
  return (
    <div className="App">
      <div>
        <input name="name" type="text" placholder="Enter Name" onChange={getInputValue} />

      </div>
      <div>
        <input  name="password" type="password" placholder="Enter Name" onChange={getInputpassword} />

      </div>

      <div>{userName}</div>
      <div>{password}</div>
      
    </div>
  );
}

export default App;
