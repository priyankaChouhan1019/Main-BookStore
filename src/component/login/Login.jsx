import React from 'react'
import '../login/Login.scss'
import { Button } from '@material-ui/core';
import {uLogin} from '../../services/UserService'
//import { uLogin } from '../../services/userSevice';
function Login() {
  const [update, setUpdate] = React.useState({ email: ' ', password: ' '})

  const changeEmail = (e) => {
      setUpdate({...update,email:e.target.value})
  }

  const changePassword = (e) => {
      setUpdate({...update,password:e.target.value})
  }

  const submit = () =>{
    uLogin(update).then((res)=>{
        console.log(res)
        
    }).catch((err)=>{
        console.log(err)
        
    })
}

  return (
    <div className ="login-container">
             <label for="email">Email </label>
            <input className='email-npt' type='text'  helpertext='Email Id'onChange={changeEmail} ></input> <br></br>

            <label for="password">Password </label>
            <input className='pass-npt' type='password'  helpertext='password' onChange={changePassword} ></input>
            <br></br>
            <button className='login-btn' style={{ backgroundColor: '#A03037'}}  onClick={submit}> Login </button>
            <p className='strick'>OR</p>

            <div className='buttom-btn'>
                <Button className='fb-btn' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='google-btn' variant="contained">Google</Button>
            </div>

        
      
    </div>
  )
}

export default Login
