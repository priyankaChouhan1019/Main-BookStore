import React from 'react'
import '../headbar/HeadBar.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import bookLogo from '../../assets/bookLogo.png'
import { useHistory } from "react-router-dom";

function HeadBar() {
  let history = useHistory();
  const openCart =()=>{
      history.push('/cart');
  }
  return (
    <div className="head-container">
        <div className="headbar">
            <div className="book-title">
                <img src={bookLogo} alt='book logo' />
                <p> Bookstore</p>
            </div>

            <div className="search-bar">
            <input  type='search' className='search' placeholder='Search...'></input>
            
            </div>

            <div className="right-icons">
            <div className="name"> 
            <PersonOutlineOutlinedIcon style={{ color: 'white' }}/>
            <p id="profile-name"> Priyanka </p>
            </div>

            <div className="cart" onClick={openCart}> 
            <ShoppingCartOutlinedIcon  style={{ color: 'white' }}/>
            <p id="cart-name"> cart</p>
            </div>
            </div>

        </div>
        
    </div>
  )
}

export default HeadBar
