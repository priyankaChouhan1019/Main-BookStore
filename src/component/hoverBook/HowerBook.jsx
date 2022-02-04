import React from 'react'
import book from '../../assets/book.png'
import '../hoverBook/HowerBook.scss'
import { Button } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function HowerBook() {
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
                        <span id='title1'>Don't make me think</span>
                        <span id='title2'>gdfdfh</span>
                        <div className="rating">
                            <span id='number1'>4.5*</span>
                            <span id='number2'>(20)</span>
                        </div>
                        <div className="price-container">
                            <span id='rs'>Rs.</span>
                            <span id='new-price'>500</span>
                            <span id='old-price'>2000</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='second-div'>
                    <span id="book-detial">Book Detail</span>
                    <p id="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quia architecto deserunt aliquid a quo non veniam,
                                  repellendus numquam debitis commodi nulla. 
                                  Laborum iusto fugiat consectetur voluptatum magni quos recusandae amet fugit, ad obcaecati!</p>
                <hr/>
                </div>
            </div>
        </div>
    )
}

export default HowerBook
