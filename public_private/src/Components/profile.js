import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const Profile = () => {
  const {id}=useParams()
  console.log(id);
  const getUserData = () => {
   
    console.log("s", id);
  }

 
  useEffect(() => {
    getUserData()
  }, [])



  return (
    <div>
      <p>fdgfgfdfgggggs</p>
      {/* {

        state && state.map((data, index) => {
          return (

            <div key={index}>
              <p>{data.first_name}</p>
            </div>


          );
        }
        )
      } */}

    </div>
  )
}

export default Profile;
