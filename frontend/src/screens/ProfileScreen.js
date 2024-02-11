import React,{useState,useEffect} from "react"
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from "../components/FormContainer"
import { Link, useNavigate,useLocation } from "react-router-dom"
import {updateUserProfile, getUserDetails} from '../actions/userActions'
import { useDispatch, useSelector } from "react-redux"
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants"

function ProfileScreen() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errorMsg,setErrorMsg] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const userDetails = useSelector( state => state.userDetails)
    const { error, loading, user }  = userDetails
    
    const userUpdateProfile = useSelector( state => state.userUpdateProfile)
    const { success }  = userUpdateProfile
    
    const userLogin = useSelector( state => state.userLogin)
    const { userInfo }  = userLogin

    useEffect(()=> {
        if(!userInfo){
            navigate('/login');
            // console.log("in")
        }
        else {
            setErrorMsg('');
            if(!user || !user.name || success){
                dispatch({type:USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
            }
            else{
                // console.log("useeffect")
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[dispatch,navigate,userInfo, user, success])

    const submitHandler =(e) =>{
        e.preventDefault()
        // console.log(password)
        // console.log(confirmPassword)
        if(password != confirmPassword){ 
            setErrorMsg('Password does not match!')
        }
        else{
            setErrorMsg('')
            dispatch(updateUserProfile({'id':user._id,'name':name,'email':email,'password':password}))
        }
    }

    return (
        <Row>
            <Col md={6}>
                <h1>Profile</h1>
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {errorMsg && <ErrorMessage variant='danger'>{errorMsg}</ErrorMessage>}
                {loading && <Loader/>}
                <Form onSubmit = {submitHandler}>
                    <Form.Group controlId="name" className="py-3">
                        <Form.Label> Name </Form.Label>
                        <Form.Control required  type='name' placeholder="Name" value = {name} onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="email" className="py-3">
                        <Form.Label> Email </Form.Label>
                        <Form.Control required  type='email' placeholder="Email" value = {email} onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="password" className="py-3">
                        <Form.Label> Password </Form.Label>
                        <Form.Control type='password' placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="confirmpassword" className="py-3">
                        <Form.Label> Confirm Password </Form.Label>
                        <Form.Control type='password' placeholder="confirmPassword" value = {confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant = 'primary'>
                        update
                    </Button>
                </Form>
            </Col>
             
        </Row>
        
    )
}

export default ProfileScreen
