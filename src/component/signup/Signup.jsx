import React from 'react'
import '../signup/Signup.scss'
import {userAxios} from '../../services/UserService'
//import { userAxios } from '../../services/userSevice';

function Signup() {

  const [update, setUpdate] = React.useState({ fullName: ' ', email: ' ', password: ' ', phone: ' ' })

  const changeName = (e) => {
      setUpdate({...update,fullName:e.target.value})
  }
  const changeEmail = (e) => {
      setUpdate({...update,email:e.target.value})
  }
  const changePassword = (e) => {
      setUpdate({...update,password:e.target.value})
  }
  const changeNumber = (e) => {
      setUpdate({...update,phone:e.target.value})
  }

  const submit = () => {
      userAxios(update).then((res)=>{
          console.log(res)
          
      }).catch((err)=>{
          console.log(err)
          
      })
  }

  return (
    <div className="signup-container">
    <div className='signup'>

            <label for="fullname">Full Name </label>
            <input className='sign-name' type='text'  helpertext='Full Name' onChange={changeName} ></input> 

            <label for="email">Email Id </label>
            <input className='sign-email' type='email'  helpertext='Email Id'  onChange={changeEmail}></input>

            <label for="password">Password </label>
            <input className='sign-pass' type='password'  helpertext='Password' onChange={changePassword} ></input>

            <label for="number">Number </label>
            <input className='sign-num' type='number'  helpertext='Number' onChange={changeNumber} ></input>
           
            <button className='sign-btn' style={{ backgroundColor: '#A03037' }}  onClick={submit}> SignUp </button>
    
     
    </div>
    </div>
  )
}

export default Signup
