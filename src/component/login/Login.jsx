import React from 'react'
import '../login/Login.scss'
import { Button ,TextField } from '@material-ui/core';
import {uLogin} from '../../services/UserService'
//import { uLogin } from '../../services/userSevice';
import { Link } from 'react-router-dom';
function Login() {
  const email = /priyachouhan1019@gmail.com/;
  const password = /Priya@1019/;

  const [update, setUpdate] = React.useState({ email: ' ', password: ' '})

  const [emailText, setEmailText] = React.useState("")
  const [passwordText, setPasswordText] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const changeEmail = (e) => {
      setUpdate({...update,email:e.target.value})
  }

  const changePassword = (e) => {
      setUpdate({...update,password:e.target.value})
  }

  const submit = () =>{

    if (email.test(update.email)) {
      setEmailError(false);
      setEmailText(" ");
  } else {
      console.log("Error")
      setEmailError(true);
      setEmailText("Enter an email")
  }
  if (password.test(update.password)) {
      setPasswordError(false);
      setPasswordText(" ")
  } else {
      setPasswordError(true);
      setPasswordText("Enter a Password")
  }

    uLogin(update).then((res)=>{
        console.log(res)
        
    }).catch((err)=>{
        console.log(err)
        
    })
}

  return (
    <div className ="login-container">
           
            <TextField style={{ backgroundColor: 'white' }} className="email-npt" type='text' id="outlined-email" label="Email Id" variant="outlined"
                onChange={changeEmail} error={emailError} helperText={emailText} />

           
             <TextField style={{ backgroundColor: 'white' }} className="pass-npt" type='text' id="outlined-email" label="Password" variant="outlined"
                onChange={changePassword} error={passwordError} helperText={passwordText} />

           <Link to='/dashboard'> <button className='login-btn' style={{ backgroundColor: '#A03037'}}  onClick={submit}> Login </button></Link>
            <p className='strick'>OR</p>

            <div className='buttom-btn'>
                <Button className='fb-btn' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='google-btn' variant="contained">Google</Button>
            </div>
 
    </div>
  )
}

export default Login
