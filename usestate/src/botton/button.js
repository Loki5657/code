import React from "react";


function Button(props) {

 
    // console.log(props);
    return (
        <div className="flex-container">
            <button className="btn_clss" label={props.num} onClick={() => props.getMethod(props.num)}>{props.num}</button>
        </div>
    );
}
export default Button;