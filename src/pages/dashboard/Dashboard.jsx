import React from 'react'
import '../dashboard/Dashboard.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import book1 from '../../assets/book1.png'
function Dashboard() {
  return (
    <div className="dash-container">
        <div className="headbar">
            <div className="book-title">
                <img src={book1} alt='book logo' />
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

            <div className="cart"> 
            <ShoppingCartOutlinedIcon  style={{ color: 'white' }}/>
            <p id="cart-name"> cart</p>
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default Dashboard
