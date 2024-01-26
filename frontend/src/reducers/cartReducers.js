import { CART_ITEM_ADD, CART_ITEM_REMOVE } from "../constants/cartConstants"

export const cartReducers = (state = { cartItems:[]}, action)=>{
    switch(action.type){
        case CART_ITEM_ADD:
            const item = action.payload
            const existItem = state.cartItems.find(cart => cart.prod == item.prod)

            if (existItem){
                return {
                    ...state,cartItems: state.cartItems.map(cart => cart.prod===existItem?item:cart)
                }
            }
            else{
                return {
                    ...state,cartItems:[...state.cartItems,item]
                }
            }
        case CART_ITEM_REMOVE:
            return {
                ...state,cartItems: state.cartItems.filter(cart => cart.prod !==action.payload)
            }
        default:
            return state
    }
}