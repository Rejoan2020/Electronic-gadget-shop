import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from '../constants/userConstants'

const initialState = {
    isAuthenticated: false,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

// console.log(initialState)

export  const userLoginReducers = (state = initialState,action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true,}
        case USER_LOGIN_SUCCESS:
            const userInfo = action.payload
            console.log(userInfo)
            return {loading:false, userInfo : action.payload,}
        case USER_LOGIN_FAIL:
            return {loading:false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default :
            return state
    }
}