import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthTypes } from '../redux/action_types/auth_types';
import { DashboardTypes } from '../redux/action_types/dashboard_types';
import '../Styles/styles.css'




const Dashboard = (props) => {

  let { user } = useParams();
  const [state, setstate] = useState({
    userdata: ''
  })

  const dashboardReduxData = useSelector((state) => state.Dashboard);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const Logout = () => {
    // localStorage.removeItem('token')
    dispatch({
      type: AuthTypes.LOGOUT_REQUEST,
      callback: () => {
        navigate("/login");
      }
    })

  }
  const getUserData = () => {
    dispatch({
      type: DashboardTypes.USER_DATA_REQUEST,
    })

  }
  useEffect(() => {
    getUserData()
  }, [])


  console.log(dashboardReduxData.UserDataRequests)
  const list = dashboardReduxData.UserDataRequests;
  return (
    <div className='flx'>

      <div className="inner_div">
        <table class="table table-striped">
          <thead>
            <tr>
            <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>

            {

              list && list.map((data, index) => {
                return (

                  <tr scope="row" key={index} onClick={() => navigate(`/profile/${data.id}`)}>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                  </tr>
                );
              }
              )
            }
          </tbody>

        </table>

      </div>

      <button onClick={Logout}>Logout</button>

    </div>
  )
}

export default Dashboard