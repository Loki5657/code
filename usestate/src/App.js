import React, { useEffect, useState } from 'react'



function Weather() {
  const [formdata, setFormdata] = useState({
    city: ''
  });
  const [respo, setRespo] = useState('')


  const getInputValue = (event, FormValue) => {
    setFormdata({ ...formdata, [FormValue]: event.target.value })
    //  console.log(formdata.city)
  }
  const get = () => {
    let Url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=fcc8de7015bbb202209bbf0261babf4c&q=' + (formdata.city);
    console.log(Url)
    fetch(Url)
      .then(response => {
        // console.log(response);
        return response.json()
      })
      .then(data => {
        setRespo(data.main.temp)
      })
  }
  console.log(respo)
  useEffect(() =>
    get()

  )

  return (
    <div>


      <div >
        <input type="text" name="city" placeholder="city"  onBlur={(e) => getInputValue(e, 'city')} />
        {/* <button onClick={get}>Get</button> */}

        <p>{respo}</p>            
      </div>




    </div>





  )
}
export default Weather;