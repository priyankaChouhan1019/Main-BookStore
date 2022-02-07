import React from 'react'
import '../signup/Signup.scss'
import { Button ,TextField } from '@material-ui/core';
import {signupService} from '../../services/UserService'
//import { userAxios } from '../../services/userSevice';

function Signup() {

    const fullName = /Priya Chouhan/;
    const email = /priyachouhan1019@gmail.com/;
    const password = /Priya@1019/;
    const number = /6268771855/;

    const [update, setUpdate] = React.useState({ fullName: ' ', email: ' ', password: ' ', phone: ' ' })

   
    const [nameText, setNameText] = React.useState("");
    const [nameError, setNameError] = React.useState(false);
    const [emailText, setEmailText] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [passwordText, setPasswordText] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [numberText, setNumberText] = React.useState("");
    const [numberError, setNumberError] = React.useState(false);


 

  const changeName = (e) => {
      setUpdate({...update,fullName:e.target.value})
      console.log(e)
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
    if (fullName.test(update.fullName)) {
        setNameError(false);
        setNameText(" ");
    } else {
        setNameError(true);
        setNameText("Enter name");
    } 
    if (email.test(update.email)) {
        setEmailError(false);
        setEmailText(" ");
    } else {
        setEmailError(true);
        setEmailText("Enter email")
    } 
    if (password.test(update.password)) {
        setPasswordError(false);
        setPasswordText(" ");
    } else {
        setPasswordError(true);
        setPasswordText("Enter password");
    } 
    if (number.test(update.password)) {
        setNumberError(false);
        setNumberText(" ")
    } else {
        setNumberError(true);
        setNumberText("Enter Number")
    }
    signupService(update).then((res) => {
        console.log(res)

    }).catch((err) => {
        console.log(err)

    })

  }



  return (
    <div className="signup-container">
    <div className='signup'>

            {/* <label for="fullname">Full Name </label>
            <input className='sign-name' type='text'  helpertext='Full Name' onChange={changeName} ></input>  */}

                <TextField style={{ backgroundColor: 'white' }} className="sign-name" type='text' id="outlined-email" label="Full Name" variant="outlined"
                onChange={changeName} error={nameError} helperText={nameText} />

                 <TextField style={{ backgroundColor: 'white' }} className="sign-email" type='text' id="outlined-email" label="Email Id" variant="outlined"
                onChange={changeEmail} error={emailError} helperText={emailText} />

                 <TextField style={{ backgroundColor: 'white' }} className="sign-pass" type='text' id="outlined-email" label="Password" variant="outlined"
                onChange={changePassword} error={passwordError} helperText={passwordText} />

                <TextField style={{ backgroundColor: 'white' }} className="sign-pass" type='text' id="outlined-email" label="Number" variant="outlined"
                onChange={changeNumber} error={numberError} helperText={numberText} />
                

           
           
            <button className='sign-btn' style={{ backgroundColor: '#A03037' }}  onClick={submit}> SignUp </button>
    
     
    </div>
    </div>
  )
}

export default Signup
