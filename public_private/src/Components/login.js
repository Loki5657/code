import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { setName,setPassword } from '../redux/reducers/userSlice'



const Login = () => {
    const [email,setEmail]=useState('12')
    const [pass,setPass]=useState('123')

    const [state, setstate] = useState({
        email:'',
        password:'',
        isLogin:false,
        errors:{
            iserror:false,
            emailError:false,
            passwordError:false,
            emailErrorMgs:'',
            passwordErrorMgs:''
        }
    })
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const getInput=(e)=>{
        const {errors}=state;
        
        setstate({...state,[e.target.name]:e.target.value,})
    }
    const submit =()=>{
        const {errors,iserror}=state;
        if(!state.email ){
          errors.iserror=true
          errors.emailError=true
          errors.emailErrorMgs="enter email"
        }
       
        if(!state.password){
            errors.iserror=true
            errors.passwordError=true
            errors.passwordErrorMgs="enter password"
     
        }
        setstate({...state, errors:errors})
        // if(iserror){
        //   dispatch(setName(state.email))
        //   dispatch(setPassword(state.password))

        // }
        if(email == state.email && pass==state.password){
          
            localStorage.setItem('token',state.errors.iserror)
            
          dispatch(setName({password: state.password,email:state.email, callback: (error) => {
            if (error) {
              setstate({ ...state, iserror: true })
                return;
            }
            navigate("/dashboard");

          }}))
           setstate({...state, errors:errors,isLogin:true })
           
        }
       
    }

    console.log(state);
  return (
    <div>
      <input type='text' name='email' placeholder='Email'onChange={getInput} style={{display:'block'}} />
      {
         (state.errors.emailError) && <p style={{color:'red',}}>{state.errors.emailErrorMgs}</p>
      }
      <input type='text' name='password' placeholder='Password' onChange={getInput} style={{display:'block'}} />
      {
         (state.errors.emailError) && <p style={{color:'red'}}>{state.errors.passwordErrorMgs}</p>
      }
      <button type='submit' onClick={submit}>Submit</button>

    </div>
  )
}

export default Login;

