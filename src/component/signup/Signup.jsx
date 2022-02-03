import React from 'react'
import '../signup/Signup.scss'

function Signup() {
  return (
    <div className="signup-container">
    <div className='signup'>

            <label for="fullname">Full Name </label>
            <input className='sign-name' type='text'  helpertext='Full Name' ></input> 

            <label for="email">Email Id </label>
            <input className='sign-email' type='email'  helpertext='Email Id' ></input>

            <label for="password">Password </label>
            <input className='sign-pass' type='password'  helpertext='Password' ></input>

            <label for="number">Number </label>
            <input className='sign-num' type='number'  helpertext='Number' ></input>
           
            <button className='sign-btn' style={{ backgroundColor: '#A03037' }}> SignUp </button>
    
     
    </div>
    </div>
  )
}

export default Signup
