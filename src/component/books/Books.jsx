import React from 'react'
import '../books/Books.scss'

function Books() {
  return (
      <div className='card'>
          <div className="book-container">
             
          </div>
            <div className="text-containt">
                <div className="title">
                 <span id='title1'>don't me me thnk</span>
                 <span id='title2'>by steve king</span>
                 <div className="rating">
                 <span id='number1'>4.5*</span>
                 <span id='number2'>(20)</span>   
                 </div>
                 <div className="price-container">
                     <span id='rs'>Rs.</span>
                     <span id='new-price'>1500</span>
                     <span id='old-price'>2000</span>
                 </div>
                </div>
            </div>
      </div>

  )
}

export default Books
