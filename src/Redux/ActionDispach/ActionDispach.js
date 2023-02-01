import { ADD_To_Cart, Remove_To_Cart } from "../actionType/actionType"

export const addtocart = (product)=>{
    return{type: ADD_To_Cart , paylode: product}
}
export const removecart = (product)=>{
    return{type: Remove_To_Cart , paylode: product}
}