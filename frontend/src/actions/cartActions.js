import axios from 'axios'
import {CART_ITEM_ADD, CART_ITEM_REMOVE} from '../constants/cartConstants'

export const addToCart = (id,quantity)=>async(dispatch,getState)=>{

    const {data} = await axios.get(`/api/products/${id}`)
    // console.log(data.display)
    dispatch({
        type: CART_ITEM_ADD,
        payload: {
            prod: data._id,
            name: data.name,
            display: data.display,
            processor: data.processor,
            image: data.image,
            price: data.price,
            countStock: data.countStock,
            quantity: quantity,
        }
    })
    localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItems))
}


export const removeitem = (id) =>(dispatch, getState) => {
    dispatch({
        type: CART_ITEM_REMOVE,
        payload:id,
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}