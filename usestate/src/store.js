import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/counterSlice'
import tempReducer from '../src/Reducers/Weather/weatherSlicer'
import cityReducer from '../src/Reducers/Weather/weatherSlicer'


export default configureStore({
  reducer: {

    counter: counterReducer,
    temp:tempReducer,
    city:cityReducer
  }
})