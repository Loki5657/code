 import React, { useState } from "react";
 const Login_app=()=>{
    const [password, setpassword] = useState('');
    const [username, setusername] = useState('');
    const getInputValue2=(e)=>{
        setusername(e.target.value)
    }
    const getInputValue=(e)=>{
        setpassword(e.target.value)
    }
    const saveLogin = async () => {
      console.log("Username,Password", username, password);
  
      const payload = {
        "email": username,
        "first_name": password,
       
      }
      const response = await fetch("https://reqres.in/api/users?page=2",
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
       
        // body: JSON.stringify(payload)
        
        });
      const result = await response.json();
 console.log("out",result)
   
    //   alert(JSON.stringify(result));
     console.log(JSON.stringify(result));
     
    }
    return(
        <div>
              <input  type="text" name="password" placeholder="Password"  onChange={(e) => getInputValue(e, 'password')} />
              <input type="email" name="email" placeholder="Email"  onChange={(e) => getInputValue2(e, 'email')} />
            
            <button onClick={saveLogin}>login</button>
        </div>
    );
 }
 export default Login_app;