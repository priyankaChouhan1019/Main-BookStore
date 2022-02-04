import React from 'react'
import '../books/Books.scss'
import book from '../../assets/book.png'
import HowerBook from '../hoverBook/HowerBook'
import { getBooks } from '../../services/UserService'

function Books() {

    const [books, setBooks] = React.useState([])
    const[select,setSelect] =React.useState(false);
    const [viewBook, setViewBook] = React.useState({});

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

    const openImage = (item) => {
        setViewBook({...viewBook,item})
        setSelect(!select)
    }

    return (

        <div className='grid-container'>
            {
                select ? <HowerBook item={viewBook}/> :
                books.map((item, index) => (
                    <div className="main-card">
                    <div className='card' key={index} className='displayGrid' value={select} >
                        <div className="book-container" onClick={()=>openImage(item)}>
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
                ))
            }
        </div>




    )
}

export default Books
