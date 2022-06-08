import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Profile = (id) => {
  const [state, setState] = useState()
  const count = useSelector((state) => state.usersDataSlicer)
  const data = () => {
    setState(count)
    console.log("s", id);
  }

  console.log("x", state)
  useEffect(() => {
    data()
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
