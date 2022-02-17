import React from 'react'
import '../dashboard/Dashboard.scss'
import { getBooks } from '../../services/UserService'
import Books from '../../component/books/Books';
import HeadBar from '../../component/headbar/HeadBar';
import HowerBook from '../../component/hoverBook/HowerBook';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
      {/* <div className='pagination'>
      <Stack spacing={2}>
      <Pagination className='pages' count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
      </div> */}

       
    
    </div>
  )
}

export default Dashboard
