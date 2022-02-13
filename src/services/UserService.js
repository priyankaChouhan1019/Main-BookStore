import axios from 'axios'

let headerConfig = {
    headers: {

      "x-access-token": localStorage.getItem("token")
    },
}
  


export const signupService = async(data)=>{
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",data)
    return response;
}

export const uLogin = async(data)=>{
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",data)
    return response;
}

export const getBooks =async()=>{
    let response =await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
    return response;
}

export const addToCart = async(data)=>{
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${data}`,data,headerConfig)
    return response;
}

export const getCart = async()=>{
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",headerConfig)
    return response;
}

export const itemsQuantity = async (qdata,data) =>{
    let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${qdata}`,data,headerConfig)
    return response;
  }

  export const add_wish_list =async (data)=>{
      let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${data}`,data,headerConfig)
      return response;
  }

  export const get_wish_list =async ()=>{
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items",headerConfig)
    return response;
}

export const delete_wish_list =async (id)=>{
    let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id}`,headerConfig)
    return response;
}

export const removeCartItem =async (id)=>{
    let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,headerConfig)
    return response;
}

export const editCustomerDetial =async (data)=>{
    let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,data,headerConfig)
    return response;
}

export const orderDetails =async (data)=>{
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,data,headerConfig)
    return response;
}

