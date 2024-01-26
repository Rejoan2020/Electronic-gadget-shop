import {createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducers,productDetailsReducers } from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'


const reducer = combineReducers({
    productList : productListReducers,
    productDetails : productDetailsReducers,
    cart: cartReducers,
})

const cartItem = localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart:{cartItems : cartItem

}}
const middleware = [thunk]
const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store