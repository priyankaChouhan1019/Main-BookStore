import React from 'react'
import '../dashboard/Dashboard.scss'
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import bookLogo from '../../assets/bookLogo.png'
import { getBooks} from '../../services/UserService'
import Books from '../../component/books/Books';
import HeadBar from '../../component/headbar/HeadBar';
function Dashboard() {
  const [bookArray , setBookArray] =React.useState([])
 

  const getdisplayBooks=()=>{
    getBooks().then((res)=>{
      console.log(res)
      setBookArray(res.data.result)
    }).catch((err)=>{
      console.log(err)
    })
  }

  React.useEffect(()=>{
    getdisplayBooks();
  },[])

  return (
    <div className="dash-container">
      <HeadBar/>
       
        <div className='bookList'>
       
        {
          bookArray.map((item,index)=>(
            <div>
               <Books/>
            </div>
          ))
        }
        </div>
      
    </div>
  )
}

export default Dashboard
