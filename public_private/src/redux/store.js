import { configureStore } from '@reduxjs/toolkit'
import userSlicer  from './reducers/userSlice'
import usersData from './reducers/usersData'
import weatherSlicer from './reducers/weatherSlicer'

export default configureStore({
  reducer: {
    weatherSlicer: weatherSlicer,
    userSlicer:userSlicer,
    usersDataSlicer:usersData,
  }
})