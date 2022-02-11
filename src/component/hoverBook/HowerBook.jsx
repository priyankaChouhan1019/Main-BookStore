import React from 'react'
import book from '../../assets/book.png'
import '../hoverBook/HowerBook.scss'
import { Button } from '@material-ui/core'
import { addToCart } from '../../services/UserService'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import { itemsQuantity,getCart ,add_wish_list,get_wish_list} from '../../services/UserService';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';

function HowerBook(props) {
    const [addBookToCart, setAddBookToCart] = React.useState([]);
    // const [quantity, setQuantity] = React.useState([]);
    const [filterArray, setFilterArray] = React.useState([]);
    const [cardId, setCardId] = React.useState([]);
    const [quantity, setQuantity] = React.useState(0);
    const [getWishlistId, setGetWishlistId] =React.useState([]);

    const bookId = (_id) => {
        console.log(_id)
        addToCart(props.item.item._id).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    const addToWishlist =(_id)=>{
        console.log(_id)
        add_wish_list(props.item.item._id).then((res) => {
            console.log(res)
            getWishlistItems();
        }).catch((err) => {
            console.log(err)
        })

    }


    const displayCartItem = () => {
        getCart()
            .then((res) => {
                console.log(res)
                let filterData = res.data.result.filter((cart) => {
                    if (props.item.item._id === cart.product_id._id) {
                        setQuantity(cart.quantityToBuy)
                        setCardId(cart._id)
                        return cart;
                    }
                })
                setFilterArray(filterData);
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const getWishlistItems =()=>{
        get_wish_list()
        .then((res)=>{
            console.log(res)
            let filterWishListData=res.data.result.filter((wishCart)=>{
                if(props.item.item._id === wishCart.product_id._id){
                    console.log(wishCart.product_id._id)
                    return wishCart;
                }
            })
            setGetWishlistId(filterWishListData);
        })
        .catch((err) => {
            console.log(err)
        })

    }

  

    const itemIncrement = () => {
        let data = {
            "quantityToBuy": quantity + 1,
          };
        
          itemsQuantity(cardId,data)
            .then((res) => {
                console.log(res)
                displayCartItem();
                console.log("Show Cart + Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const itemDecrement = () => {
        let data = {
            "quantityToBuy": quantity - 1,
          };
        
          itemsQuantity(cardId,data)
            .then((res) => {
                console.log(res)
                displayCartItem();
                console.log("Show Cart - Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    React.useEffect(() => {
        displayCartItem();
        getWishlistItems();

    }, [quantity]);

    return (
        <div className="hower-container">
            <div className='left-container'>

                <div className="image-container">
                    <img id="hower-img" src={book}></img>
                </div>
                <div className='btn-container'>
                    {
                        filterArray.length === 0 ? (
                            <Button className='bag-btn' style={{ backgroundColor: '#A03037', color: 'white' }} variant="contained"
                                onClick={() => bookId(props.item.item._id)}>
                                ADD TO BAG
                            </Button>
                        )
                            :
                            (
                                <div className='cont-btn'>
                                  
                                    <RemoveCircleOutlineTwoToneIcon className='minus' onClick={itemDecrement} id={props.item.item._id} />
                                    <span className='howerCount'>{quantity}</span>
                                   
                                    < AddCircleOutlineTwoToneIcon className='plus' onClick={itemIncrement} id={props.item.item._id} />
                                </div>
                            )
                    }

                    <Button className='wish-btn' style={{ backgroundColor: '#333333', color: 'white' }} variant="contained"
                    onClick={()=>addToWishlist(props.item.item._id)}> <FavoriteBorderOutlinedIcon /> WISHLIST</Button>
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
                <hr id="line" />
                <div className='second-div'>
                    <span id="book-detial">Book Detail</span>
                    <p id="lorem">{props.item.item.description}</p>

                </div>
                <hr id="line" />
                <div className="third-div">
                    <span id="feedback"> Customer Feedback</span>
                </div>

                <div className="rating-div">
                    <span id='rating'>overall rating</span>
                    <div className='star'>
                        <StarBorderPurple500OutlinedIcon />
                        <StarBorderPurple500OutlinedIcon />
                        <StarBorderPurple500OutlinedIcon />
                        <StarBorderPurple500OutlinedIcon />
                        <StarBorderPurple500OutlinedIcon />
                    </div>
                    <input className="review" type="text" placeholder='write your review'></input>
                    <Button className='sumit-btn' style={{ backgroundColor: '#3371B5', color: 'white' }} variant="contained">submit</Button>
                </div>
            </div>
        </div>
    )
}

export default HowerBook
