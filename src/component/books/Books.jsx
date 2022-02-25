import React from 'react'
import '../books/Books.scss'
import book from '../../assets/book.png'
import HowerBook from '../hoverBook/HowerBook'
import { getBooks } from '../../services/UserService'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Books(props) {

    const [books, setBooks] = React.useState([])
    const[select,setSelect] =React.useState(false);
    const [viewBook, setViewBook] = React.useState({});
    const [bookNum, setBookNum] = React.useState(1);
    
    const getBookDetails = () => {
        getBooks().then((res) => {
            console.log(res)
            setBooks(res.data.result)
        }).catch((err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        getBookDetails();
    }, [])

    const openDispalyImage = (item) => {
        setViewBook({...viewBook,item})
        setSelect(!select)
    }

   

    const nextPage = (e, value) => {
      console.log(value)
        setBookNum(value)
  }
  console.log(props.dataSearchOne)
  

    return (
        <div>
          
        <div className='grid-container'>
            {
                select ? <HowerBook item={viewBook}/> :
                bookNum ==1  ? 
                books.slice(0,10)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )): 
                bookNum ==2  ? 
                books.slice(10,20)
                .filter(item => item.bookName.includes(props.dataSearchOne.toLowerCase()))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):
                bookNum == 3  ? 
                books.slice(20,30)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):
                bookNum == 4  ? 
                books.slice(30,40)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):
                bookNum == 5 ? 
                books.slice(40,50)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):
                bookNum == 6 ? 
                books.slice(50,60)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):
                bookNum == 7 ? 
                books.slice(60,70)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):
                bookNum == 8 ? 
                books.slice(70,80)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):
                bookNum == 9? 
                books.slice(80,90)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):
                bookNum == 10 ? 
                books.slice(90,100)
                .filter(item => item.bookName.includes(props.dataSearchOne))
                .map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openDispalyImage(item)}>
                            <img className="image" src={book}></img>
                        </div>
                        <div className="text-containt">
                            <div className="title">
                                <span id='title1'>{item.bookName}</span>
                                <span id='title2'>{item.author}</span>
                                <div className="rating">
                                    <span id='number1'>4.5*</span>
                                    <span id='number2'>(20)</span>
                                </div>
                                <div className="price-container">
                                    <span id='rs'>Rs.</span>
                                    <span id='new-price'>{item.price}</span>
                                    <span id='old-price'>2000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )):null
            }
                
        </div>
        <div className='main-pagination'>
               <div  className='pagination'>
                        <Stack  spacing={2}>
                            <Pagination bookNum={bookNum} onChange={nextPage} count={10} />
                        </Stack>
              </div>
                    
              </div>
        </div>

    )
}

export default Books
