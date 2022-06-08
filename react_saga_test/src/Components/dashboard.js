import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const Logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  


  return (
    <div>
      Dashboard

      <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default Dashboard