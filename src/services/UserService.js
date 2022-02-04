import axios from 'axios'


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