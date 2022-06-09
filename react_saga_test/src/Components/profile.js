import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DashboardTypes } from '../redux/action_types/dashboard_types';

//get user by id
// https://reqres.in/api/users/2

const Profile = (props) => {
  const {id} = useParams();
  console.log(id);

  const getData = () => {
   
  }

  useEffect(() => {
    getData();
  }, [id])
  return (
    <div>
  
    </div>
  )
}

export default Profile;
