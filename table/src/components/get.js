import React, { useEffect, useState } from "react"
import axios from 'axios';

const Get =()=>{

    const [state,setState]=useState()
    const data=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            setState({ persons });
          })

      }
      useEffect(() => {
        data();
      },[]);
      console.log(state);
      return(
          <div>
              fd
          </div>
      );
}
export default Get;