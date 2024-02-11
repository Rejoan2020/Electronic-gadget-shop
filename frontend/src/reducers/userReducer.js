import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,
    
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_RESET,

    USER_LOGOUT,

} from '../constants/userConstants'

const initialState = {
    isAuthenticated: false,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

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

export  const userRegisterReducers = (state = {},action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading:true,}
        case USER_REGISTER_SUCCESS:
            const userInfo = action.payload
            console.log(userInfo)
            return {loading:false, userInfo : action.payload,}
        case USER_REGISTER_FAIL:
            return {loading:false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default :
            return state
    }
}

export  const userDetailsReducers = (state = { user: {}},action)=>{
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return {...state, loading:true}
        case USER_DETAILS_SUCCESS:
            const userInfo = action.payload
            console.log(userInfo)
            return {loading:false, user : action.payload,}
        case USER_DETAILS_FAIL:
            return {loading:false, error: action.payload} 
        case USER_DETAILS_RESET:
            return {user : {}} 
            
        default :
            return state
    }
}

export  const userUpdateProfileReducers = (state = { },action)=>{
    switch(action.type){
        case USER_UPDATE_PROFILE_REQUEST:
            return {loading:true}
        case USER_UPDATE_PROFILE_SUCCESS:
            // const userInfo = action.payload
            return {loading:false, success:true,userInfo : action.payload,}
        case USER_UPDATE_PROFILE_FAIL:
            return {loading:false, error: action.payload} 
        case USER_UPDATE_PROFILE_RESET:
            return {}
        default :
            return state
    }
}