import React from 'react'
import HeadBar from '../headbar/HeadBar';
import book from '../../assets/book.png'
import { Button } from '@material-ui/core'
import '../cart/Cart.scss'
import {removeCartItem,itemsQuantity,getCart} from '../../services/UserService'
import CustomerDetial from '../customerDetial/CustomerDetial';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import { useHistory } from "react-router-dom";


function Cart() {

    const [filterArray, setFilterArray] = React.useState([]);
    const [cardIdDetails, setCartIdDetails] = React.useState([]);
    const [openAddress, setOpenAddress] = React.useState(false);
    const [openOrderSummery, setOpenOrderSummery] = React.useState(false);
    const [quantity, setQuantity] = React.useState([filterArray.quantityToBuy]);
    let history = useHistory();
    const openDashboard =()=>{
        history.push('/dashboard');
    }

    const bookDecrementItem = (id) => {
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        console.log("decre")
        let data = {
            "quantityToBuy": quantity - 1,
        };

       itemsQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                // console.log(res)
                console.log(data)
                showCartItem();
                console.log("Show Cart - Item")
            }).catch((err) => {
                console.log(err)
            })
    }

    const bookIncrementItem = (id) => {
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        console.log("incre")
        let data = {
            "quantityToBuy": quantity + 1,
        };

       itemsQuantity(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                // console.log(res)
                console.log(data)
                showCartItem();
                console.log("Show Cart + Item")
            }).catch((err) => {
                console.log(err)
            })
    }
    const showCartItem = () => {
        getCart()
            .then((res) => {
                console.log(res)
                // let filterData = res.data.result.filter((cart) => {
                //     if (props.item._id === cart.product_id._id) {
                //         setQuantity(cart.quantityToBuy)
                //         setCartIdDetails(cart._id)
                //         return cart;
                //     }
                // })
                setFilterArray(res.data.result);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteCartItem = (id) => {
        console.log("remove")
        console.log(id)
        console.log(filterArray)
        let filterCartData = filterArray.filter((cart) => {
            if (id._id === cart._id) {
                setQuantity(cart.quantityToBuy)
                setCartIdDetails(cart._id)
                return cart;
            }
        })
        setFilterArray(filterCartData)
        console.log(quantity)
        
        let data = {
            "quantityToBuy": quantity * 0,
        };

        removeCartItem(cardIdDetails, data)
            .then((res) => {
                console.log(res)
                // console.log(res)
                console.log(data)
                showCartItem();
                
            }).catch((err) => {
                console.log(err)
            })
    }

    const orderPlaced = () => {
        setOpenAddress(!openAddress)
    }

    const continueOrder = () => {
        setOpenOrderSummery(openOrderSummery)
    }


    React.useEffect(() => {
        showCartItem();
    }, []);
  return (
    <div className='cart-mainContainer'>
            <HeadBar />
            <div className='homeLine'>
                 <span className='c-home' onClick={openDashboard}>Home/</span>
                 <span className='c-list'>My cart</span>
                </div>
            <div className='cart-container'>
               
                <div className='bookDetailsBox'>
                    <div className='firstLine'>
                        <span className='cart'>My cart ({filterArray.length}) </span>
                        <location className='location'>
                            <div className='bridgeLabz'>
                                <LocationOnTwoToneIcon /> BridgeLabz Solutions LLP, No...
                            </div>
                        </location>
                    </div>
                    {
                            filterArray.filter(item => item.product_id !== null).map((item, index) => (
                    <div className='bookdetial-div'>
                  
                        <div className='bookdetial-container'>
                            <div className='cart-imageContainer'>
                                <img className='cart-img' src={book}></img>
                            </div>
                      
                            <div>

                                <div className='cartBookDetails'>
                                    <span className='cartTitle'>
                                        {item.product_id.bookName}
                                    </span> <br></br>
                                    <span className='cartAuthor'>by 
                                        {item.product_id.author}
                                    </span> <br></br>
                                    <div className='cart-price'> 
                                    <span className='cartNewPrice'>
                                        {item.product_id.price}
                                    </span><br></br>
                                    <span className='cartOldPrice'>rs2000</span> <br></br>
                                    </div>
                                    <div className='buttonFour'>

                                    <Button className='minus' onClick={() => bookDecrementItem(item)} 
                                    > <RemoveCircleOutlineTwoToneIcon /> </Button>
                                    <Button className='cartcount'> {item.quantityToBuy} </Button>
                                    <Button className='plus' onClick={() => bookIncrementItem(item)}
                                    > <AddCircleOutlineTwoToneIcon /> </Button>
                                    <Button className='remove' onClick={() => deleteCartItem(item)}
                                    > Remove </Button>

                                </div>
                                </div>
                                
                            </div>

                        </div>
                           
                    </div>
                    ))}
                    {filterArray.length !== 0 ? (
                        <Button className='submit' variant="contained" onClick={orderPlaced} >Place Order</Button>
                    ) : null
                    }
                </div>

                <div className='address'>
                    {!openAddress ? (
                        <div>
                            <div className='details'>
                                Address Details
                            </div>
                            <div className='order'>
                                <div className='summary'>
                                    Order summary
                                </div>
                            </div>
                        </div>

                    ) : (
                        <CustomerDetial continueOrder={continueOrder} />
                    )}


                </div>


            </div>
        </div>
  )
}

export default Cart