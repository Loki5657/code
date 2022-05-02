
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
// import styles from './Counter.module.css'
// import axios from 'axios';
import { setCity, setTemp ,setCountry, fetchPosts} from './Reducers/Weather/weatherSlicer';

export function Counter() {
  const count = useSelector(state => state.counter.value)
  // const temp = useSelector(state => state.temp.temp)
  // const city = useSelector(state => state.city.city)
  // const country=useSelector(state=>state.city.city)


  const dispatch = useDispatch()



  // const getData = async () => {

  //   const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=fcc8de7015bbb202209bbf0261babf4c&q=Kolkata'
  //   const res = await fetch(url)
  //   const json = await res.json()
  //   const city=json.name
  //   const temp=json.main.temp
  //   const country=json.sys.country
  //   console.log(json);
    

  //   dispatch(setTemp(temp))
  
  //   dispatch(setCity(city))
  //   dispatch(setCountry(country))


  
  // }

  // const getValue = () => {
  //   if (temp) {
  //     return temp.main.temp;
  //   }
  //   return "";
  // }
  // const getCity = () => {
  //   if (city) {
  //     return city.name;
  //   }
  //   return "";
  // }




  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
       
        
        <button
         
          onClick={()=>dispatch(fetchPosts())}
        >
          get
        </button>

      </div>
    </div>
  )
}