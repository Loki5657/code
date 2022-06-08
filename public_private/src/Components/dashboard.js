import React, { useEffect, useState } from 'react'
import '../../src/App.css'
import axios from 'axios';
import Button from '../Shared/Button';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../redux/reducers/usersData'; 
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const [state, setState] = useState()
  const navigate = useNavigate();
  const dispatch=useDispatch()



  async function getUserData() {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      const respo = response.data.data
      setState(respo)
      dispatch(setUserData(respo))

    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserData();
  }, [])


  const clearLocal = () => {
    localStorage.clear('token')
    window.location.reload()
  }
 
  return (
    <div className='flx'>

      <div className="inner_div">
        <table>
          <thead>
            <tr>
              <th>First  Name</th>
              <th>Last Name</th>
              <th>Email</th>


              {/* <th>Country</th> */}
            </tr>
          </thead>
          <tbody>

            {

              state && state.map((data, index) => {
                return (

                  <tr key={index}>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                    <td>
                     {/* <Button id={data.id} onClick={()=>navigate('/profile')} /> */}
                      <button  onClick={() => navigate(`/dashboard/${data.id}`)}>View</button>
                    </td>



                  </tr>
                );
              }
              )
            }
          </tbody>

        </table>

      </div>


      <button onClick={clearLocal}>logout</button>


    </div>
  )
}

export default Dashboard