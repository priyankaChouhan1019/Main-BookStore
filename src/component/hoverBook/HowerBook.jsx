import React from 'react'
import book from '../../assets/book.png'
import '../hoverBook/HowerBook.scss'
import { Button } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
function HowerBook(props) {
    return (
        <div className="hower-container">
            <div className='left-container'>

                <div className="image-container">
                    <img id="hower-img" src={book}></img>
                </div>
                <div className='btn-container'>
                    <Button className='bag-btn' style={{ backgroundColor: '#A03037', color: 'white' }} variant="contained">ADD TO BAG</Button>
                    <Button className='wish-btn' style={{ backgroundColor: '#333333', color: 'white' }} variant="contained"> <FavoriteBorderOutlinedIcon /> WISHLIST</Button>
                </div>

            </div>
            <div className='right-container'>
                <div className="text-containt">
                    <div className="title">
                        <span id='title1'>{props.item.item.bookName}</span>
                        <span id='title2'>{props.item.item.author}</span>
                        <div className="rating">
                            <span id='number1'>4.5*</span>
                            <span id='number2'>(20)</span>
                        </div>
                        <div className="price-container">
                            <span id='rs'>Rs.</span>
                            <span id='new-price'>{props.item.item.price}</span>
                            <span id='old-price'>2000</span>
                        </div>
                    </div>
                </div>
                <hr id="line"/>
                <div className='second-div'>
                    <span id="book-detial">Book Detail</span>
                    <p id="lorem">{props.item.item.description}</p>
               
                </div>
                <hr id="line"/>
                <div className="third-div">
                    <span id="feedback"> Customer Feedback</span>
                </div>

                <div className="rating-div">
                    <span id='rating'>overall rating</span>
                    <div className='star'>
                        <StarBorderPurple500OutlinedIcon/>
                        <StarBorderPurple500OutlinedIcon/>
                        <StarBorderPurple500OutlinedIcon/>
                        <StarBorderPurple500OutlinedIcon/>
                        <StarBorderPurple500OutlinedIcon/>
                    </div>
                    <input className="review" type="text" placeholder='write your review'></input>
                    <Button className='sumit-btn' style={{ backgroundColor: '#3371B5', color: 'white' }} variant="contained">submit</Button>
                </div>
            </div>
        </div>
    )
}

export default HowerBook
