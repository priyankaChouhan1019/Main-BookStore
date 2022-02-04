import React from 'react'
import '../dashboard/Dashboard.scss'
import { getBooks } from '../../services/UserService'
import Books from '../../component/books/Books';
import HeadBar from '../../component/headbar/HeadBar';
import HowerBook from '../../component/hoverBook/HowerBook';
function Dashboard() {
  const [bookArray, setBookArray] = React.useState([])



  return (
    <div className="dash-container">
      <HeadBar />

      <div className='second-header'>
        <div className='left-title'>
          <span className="book">Books</span>
          <span className='quantity'>(128 items)</span>
        </div>
        <div>
          <select name="sort by relevance" id="dropdown">
            <option value="lowPrice">Price:Low to high</option>
            <option value="highPrice">Price:High to low</option>
            <option value="newPrice">Newest arrivals</option>
          </select>
        </div>
</div> 
      <div className='bookList'>
        <div>
          <Books />
          {/* <HowerBook /> */}

        </div>
      </div>

    </div >
  )
}

export default Dashboard
