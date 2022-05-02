import React, { useState } from "react";
import { FormLabel, FormControl, Box, TextField, Typography, Toolbar, Button, } from '@mui/material';
import { ImageList } from "@mui/material";
import codexlogo from '../images/logo_codex.png'
import account_circle from '../images/account_circle.svg';
import '../Components/Css/forgotpassword.css'
import { textAlign } from "@mui/system";

function ForgotPassword() {

    const [formdata, setFormdata] = useState({
        email: '',
        showError: false,
        errors: {
            emailError: false,
            emailMessage: '',
        }

    });
    const getInputValue = (event, FormValue) => {
        const { errors } = formdata;
        errors[FormValue + 'Error'] = false
        setFormdata({ ...formdata, [FormValue]: event.target.value, errors: errors })
        console.log(formdata.email)

    }
    const validation = (e) => {
        // console.log('clicked')

        let iserror = false


        e.preventDefault();
        const { errors } = formdata;

        if (!formdata.email) {
            errors.emailMessage = 'Email required';
            errors.emailError = true;
            iserror = true
        }
        else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formdata.email))) {
            errors.emailMessage = 'Please enter valid email';
            errors.emailError = true;
        } else {
            errors.emailMessage = '';
            errors.emailError = false;
        }
        if (iserror) {
            setFormdata({ ...formdata, showError: true })

        }
    }

    return (
        <div className="body">


            <Box className="side" sx={{ flexGrow: 1 }}>
                <Toolbar>
                    <img src={codexlogo} alt="logo" id="logo" size="small" />
                </Toolbar>
                <Typography sx={{ margin: 3, color: 'black', fontSize: 16 }} variant="h6"  ><b>FORGOT POSSWORD</b></Typography>
                <FormControl sx={{ input: { color: "black" }, "label": { color: "black" } }}  >

                    <TextField onChange={(e) => getInputValue(e, 'email')} id="outlined-basic" label="Email Address" variant="outlined" placeholder="Email Address" size="small" sx={{ margin: 1, }} className={("textfield " + ((formdata.errors.emailError )&&  'border_clr'))}/>

                    {
                        formdata.errors.emailError &&
                        <div className="error_mgs">{formdata.errors.emailMessage}</div>
                    }
                    <Button sx={{ margin: 2, width: '30ch' }} variant="contained" color="primary" size="small" onClick={validation}> FORGOT POSSWORD</Button>



                </FormControl>
                <Box className="already_have_acnt">
                    <p sx={{ margin: 5, color: 'black', }}><u className="acnt">Back To Login Page</u > <a href="#"  >Login</a>.</p>
                    <p sx={{ margin: 5, color: 'black', }}><u className="acnt">Already have an account?</u > <a href="#"  >Sign in</a>.</p>
                </Box>
            </Box>
        </div>
    )
}
export default ForgotPassword;