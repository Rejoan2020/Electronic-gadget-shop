import React,{useState,useEffect} from "react"
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from "../components/FormContainer"
import { Link, useNavigate,useLocation } from "react-router-dom"
import {register,login} from '../actions/userActions'
import { useDispatch, useSelector } from "react-redux"
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function RegisterScreen() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errorMsg,setErrorMsg] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.search ? location.search.split('=')[1] : '/';
    const userRegister = useSelector( state => state.userRegister)
    const { error, loading, userInfo }  = userRegister

    useEffect(()=> {
        if(userInfo){
            navigate(redirect || '/');
        }
    },[navigate,userInfo,redirect])

    const submitHandler =(e) =>{
        e.preventDefault()
        console.log("Submitted")
        if(password != confirmPassword){
            setErrorMsg('Password does not match!')
        }
        else
        dispatch(register(name, email,password))
    }

    return (
        <FormContainer>
            <h1>Register</h1>
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {errorMsg && <ErrorMessage variant='danger'>{errorMsg}</ErrorMessage>}
            {loading && <Loader/>}
            <Form onSubmit = {submitHandler}>
                <Form.Group controlId="name" className="py-3">
                    <Form.Label> Name </Form.Label>
                    <Form.Control required type='name' placeholder="Name" value = {name} onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="email" className="py-3">
                    <Form.Label> Email </Form.Label>
                    <Form.Control required type='email' placeholder="Email" value = {email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password" className="py-3">
                    <Form.Label> Password </Form.Label>
                    <Form.Control required type='password' placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmpassword" className="py-3">
                    <Form.Label> Confirm Password </Form.Label>
                    <Form.Control required type='password' placeholder="confirmPassword" value = {confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant = 'primary'>
                    Register
                </Button>
            </Form>
            <Row className="py-3">
                    <Col>
                        Already have an account?
                        <Link to={redirect?`/login?redirect=${redirect}` : '/login'}>
                                Log In
                        </Link>
                    </Col>
                </Row>
        </FormContainer>
    )
}

export default RegisterScreen
