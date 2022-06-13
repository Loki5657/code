import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DashboardTypes } from '../redux/action_types/dashboard_types';

//get user by id
// https://reqres.in/api/users/2

const Profile = () => {
  const dashboardReduxData = useSelector((state) => state.Dashboard);

  const dispatch = useDispatch();
  const { id } = useParams();

  const getData = async () => {
    // const url=`https://reqres.in/api/users/${id}`
    // const res= await axios.get(url)


    dispatch({
      type: DashboardTypes.PERSON_REQUST, data: { id },
      callback: () => {

      },

    })

  }

  useEffect(() => {
    getData();
  }, [id])

  const user = dashboardReduxData.Persondata;
  console.log("list", user)
  return (
    <div className='flx'>
      <h2 className='user_dtsr center'>Profile Details</h2>

      {
        user && <div className='user_dts center'>
          <div className='center'>First Name:<span className= "text">{user.first_name}</span></div>
          <div className='center text2'>Last Name:<span className= "text ">{user.last_name}</span></div>
          <div className='center'>Email:<span className= "text">{user.email}</span></div>

        
        
        </div>
        

      }


    </div>
  )
}

export default Profile;
