import React from 'react'
import '../dashboard/Dashboard.scss'
import { getBooks } from '../../services/UserService'
import Books from '../../component/books/Books';
import HeadBar from '../../component/headbar/HeadBar';
function Dashboard() {
  const [bookArray, setBookArray] = React.useState([])



  return (
    <div className="dash-container">
      <HeadBar />

    
      
      <div className='bookList'>
        <div>
          <Books />
        </div>
      </div>

    </div >
  )
}

export default Dashboard
