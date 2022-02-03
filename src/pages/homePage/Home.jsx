import React from 'react'
import { Button } from '@material-ui/core';
import '../homePage/Home.scss'
import Signup from '../../component/signup/Signup';
import Login from '../../component/login/Login';
import book from '../../assets/book.png'

function Home() {

    const [update, setUpdate] = React.useState(true)

    const register = () => {
        setUpdate(!update)
    }

  return (
    <div className="mainPageContainer">
    <div className='midBackground'>
        <img className="mainLogo" src={book} alt="this is logo"></img>
        <p className='logoname'>online book shopping</p>
        <div className='loginSignin'>
            {/* <Login /> */}
            <span className='directLogin' onClick={register}>
                LOGIN
            </span>
            <span className='directSignup' onClick={register} >
                SIGNUP
            </span>
        </div>
        <div className='loginSignupContainer'>
            {update ? <Login /> : <Signup />}
        </div>
    </div>
 
</div>
  )
}

export default Home
