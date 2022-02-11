import React from 'react'
import '../wishList/WishList.scss'
import HeadBar from '../headbar/HeadBar'
import book3 from '../../assets/book3.png'
import UserService from '../../services/UserService'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {get_wish_list,delete_wish_list} from '../../services/UserService';

function WishList(props) {
    const [wishList, setWishList] = React.useState([]);
    const [quantity, setQuantity]= React.useState(false);

    const getWishlistItems =()=>{
        get_wish_list()
        .then((res)=>{
            console.log(res)
            setWishList(res.data.result);
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const deleteBook =(id)=>{
        delete_wish_list(id)
        .then((res)=>{
            console.log(res)
            setQuantity(!quantity) 
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    React.useEffect(() => {
        getWishlistItems();

    }, [quantity]);


    return (
        <div className='wishlist-container'>
            <HeadBar />
            <div className='wishlist-inner-container'>

                <div className='wishlist-header'>
                    <span className='w-home'>Home/</span>
                    <span className='w-list'>My WishList</span>
                </div>
                <div className='wishlist-headig'>
                    My WishList ({wishList.length})
                </div>
                {wishList.map((item) => (
                <div className='wishlist-bkdetial-container'>
              
                    
                    <div key={item._id} className='wl-image-container'>
                        <img className='wishlist-img' src={book3}></img>
                    </div>
                    <div className='wishlistBookInfoContainer'>
                        <div className='wishlistBookName'>
                            {item.product_id.bookName}
                        </div>
                        <div className='wishlistBookAuthor'>
                            by {item.product_id.author}
                        </div>
                        <div className='wishlistBookPriceContainer'>
                            <div className='wishlistBookNewPrice'>  
                                Rs. {item.product_id.discountPrice}
                            </div>
                            <div className='wishlistBookOldPrice'>
                                Rs. {item.product_id.price}
                            </div>
                        </div>
                    </div>
                    <div className='wl-delete-btn'
                    onClick={()=>deleteBook(item.product_id._id)}>
                <DeleteOutlineOutlinedIcon/>
                </div>
                </div>
                
                ))}
                
            </div>


        </div>

    )
}

export default WishList
