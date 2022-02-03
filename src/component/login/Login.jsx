import React from 'react'
import '../login/Login.scss'
import { Button } from '@material-ui/core';
function Login() {
  return (
    <div className ="login-container">
             <label for="email">Email </label>
            <input className='email-npt' type='text'  helpertext='Email Id' ></input> <br></br>

            <label for="password">Password </label>
            <input className='pass-npt' type='password'  helpertext='password' ></input>
            <br></br>
            <button className='login-btn' style={{ backgroundColor: '#A03037' }}> Login </button>
            <p className='strick'>OR</p>

            <div className='buttom-btn'>
                <Button className='fb-btn' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='google-btn' variant="contained">Google</Button>
            </div>

        
      
    </div>
  )
}

export default Login
