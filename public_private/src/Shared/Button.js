import React from 'react'

const Button = (props) => {
  
  return (
    <div>
<button name={props.name} id={props.id} onClick={`/dashboard/${props.id}`} >View</button>


    </div>
  )
}

export default Button
