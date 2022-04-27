
import React, { useState } from "react";
import '../Css/Login.css'
// import icon from '../../Images/icon-name.svg';
// import icon1 from '../../Images/icon-mail.svg';
// import icon2 from '../../Images/icon-pwd.svg';
// import Logo from '../../Images/Logo.png';
import icon from '../images/Logo.png';
import { Outlet, Link } from "react-router-dom";



function Login() {

  const [formdata, setFormdata] = useState({
    number: '',
    email: '',
    password: '',
    country: '',
    gender: '',
    terms: '',
    showError: false,
    errors: {
       emailError: false,
            emailMessage: '',
            passwordError: false,
            passwordMessage: '',
            numberError: false,
            numberMessage: ''

    }

  });




  const getInputValue = (e, FormValue) => {
    const { errors } = formdata;
    errors[FormValue+'Error'] = false
    setFormdata({ ...formdata, [FormValue]: e.target.value, errors: errors })
     console.log(formdata)
    // const { errors } = formdata;
    // if( e.target.value){
    //   errors[e.target.name+'Error']=false;
    // }
    // setFormdata({...formdata,[e.target.name]: e.target.value, errors: errors})
   


  }
  const getCheckedValue = (event, FormValue) => {
    setFormdata({ ...formdata, [FormValue]: event.target.checked })
    // console.log(userName)

  }
  const validation = (e) => {
    // console.log('clicked')

    let iserror = false
    // if (!formdata.number || !formdata.email || !formdata.password || !formdata.country || !formdata.gender || !formdata.terms) {
    //   // iserror = true
    //   setFormdata({ ...formdata, showError: true })
    // }
    // if (!((/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(formdata.password))) {
    //   console.log("password is invalid")
    // }
    // else {
    //   console.log("password is valid")
    // }

    // if (!formdata.number) {
    //   iserror = true
    // }
    // if (!formdata.email) {
    //   iserror = true
    // }
    // if (!formdata.password) {
    //   iserror = true
    // }
    // if (!formdata.country) {
    //   iserror = true
    // }
    if (!formdata.gender) {
      iserror = true
    }
    if (!formdata.terms) {
      iserror = true
    }
    if (iserror) {
      setFormdata({ ...formdata, showError: true })

    }
    e.preventDefault();
    const { errors } = formdata;

    if(!formdata.email) {
      errors.emailMessage = 'Email required';
      errors.emailError = true;
  } else if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formdata.email))) {
      errors.emailMessage = 'Please enter valid email';
      errors.emailError = true;
  } else {
      errors.emailMessage = '';
      errors.emailError = false;
  }

  if(!formdata.password) {
    errors.passwordMessage = 'Password required';
    errors.passwordError = true;
} else if(!((/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(formdata.password))) {
    errors.passwordMessage = 'Please enter valid password';
    errors.passwordError = true;
} else {
    errors.passwordMessage = '';
    errors.passwordError = false;
}


  }
  const onlyNumbers = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
      console.log("num press")

    }
    return true;

  }


  return (
    <div>
      <div className="background">
        <div className="block">
          <div className="pic">
            <img className="logo" src={icon} alt="logo" />
          </div>
          <h2 className="create">Create an account</h2>
          <form className="login">

            <div className="email">
              <input className={("textfield " + ((formdata.errors.emailError )&&  'border_clr'))} type="email" name="email" placeholder="Email" value={formdata.email} onChange={(e) => getInputValue(e, 'email')} />
              <input className="absolute" type="image" src={icon} alt="mail" />
              {
                    (formdata.errors.emailError )&&
                    <div  className="error_mgs">{formdata.errors.emailMessage}</div>
                }
            </div>


            <div className="name">
              <input className={("textfield " + ((!formdata.number && formdata.showError) && 'border_clr'))} type="text" name="number" placeholder="Enter Number" value={formdata.number} onChange={(e) => getInputValue(e, 'number')}
                onKeyPress={onlyNumbers} />
              <input className="absolute1" type="image" src={icon} alt="name_img" />
              {
                (!formdata.number && formdata.showError) &&
                <div className="error_mgs1">Name required</div>
              }
            </div>

            <div className="password">
              <input className={("textfield " + ((!formdata.password && formdata.showError) && 'border_clr'))} type="password" name="password" placeholder="Password" value={formdata.password} onChange={(e) => getInputValue(e, 'password')} />
              <input className="absolute" type="image" src={icon} alt="password" />
              {
                (!formdata.password && formdata.showError) &&
                <div className="error_mgs">Password required</div>
              }
            </div>
            {/*Dropdown buttons for country selection */}

            <div className="password">
              <select name="country" className={("textfield " + ((!formdata.country && formdata.showError) && 'border_clr'))} onChange={(e) => getInputValue(e, 'country')} >
                <option value=" ">Choose country</option>
                <option value="india">India</option>
                <option value="egypt">Egypt</option>
                <option value="america">America</option>
              </select>
              {
                (!formdata.country && formdata.showError) &&
                <div className="error_mgs">Select Country required</div>
              }

            </div>
            {/* {/ {/ radio buttons for gender selection /} /} */}
            <div className={("gender_compo " + ((!formdata.country && formdata.showError)))} onChange={(e) => getInputValue(e, 'gender')}>
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" value="Male" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" value="Female" />
              <label htmlFor="other">Other</label>
              <input type="radio" name="gender" value="other" />
              {
                (!formdata.gender && formdata.showError) &&
                <div className="error_mgs">Select Your Gender</div>
              }
            </div>


            <div className="gender_compo">
              <label htmlFor="terms" >Terms And Conditions</label>
              <input type="checkbox" className={(!formdata.country && formdata.showError)} name="terms" onChange={(e) => getCheckedValue(e, 'terms')} />
              {
                (!formdata.terms && formdata.showError) &&
                <div className="error_mgs">Accept Terms and Conditions </div>
              }
            </div>
            <>
              <nav>
                <ul>
                  <li>

                    <Link to="/header"> Demo</Link>
                  </li>


                </ul>
              </nav>

              <Outlet />
            </>
            <div className="button">
              <input className="btn" type="button" name="submit" value="Create Account" onClick={validation} />
            </div>
          </form>

          <p style={{ color: 'red' }}>Entered number is:{formdata.number}</p>
          <p style={{ color: 'red' }}>Entered Email is:{formdata.email}</p>

          <p style={{ color: 'red' }}>Entered Password is: {formdata.password}</p>
          <p style={{ color: 'red' }}>Selected country is: {formdata.country}</p>
          <p style={{ color: 'red' }}>Selected Gender is: {formdata.gender}</p>
          <p style={{ color: 'red' }}>Terms And Conditions: {formdata.terms ? 'Yes' : 'No'}</p>


          <a className="link" href="http://localhost:3000/Signup">Already have an account?</a>
        </div>
      </div>
    </div>
  )
}

export default Login;