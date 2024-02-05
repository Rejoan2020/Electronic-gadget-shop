import React,{useState,useEffect} from "react"
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from "../components/FormContainer"
import { Link, useNavigate,useLocation } from "react-router-dom"
import {login} from '../actions/userActions'
import { useDispatch, useSelector } from "react-redux"
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'


function LoginScreen() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.search ? location.search.split('=')[1] : '/';
    const userLogin = useSelector( state => state.userLogin)
    const { error, loading, userInfo }  = userLogin

    useEffect(()=> {
        if(userInfo){
            navigate(redirect || '/');
        }
    },[navigate,userInfo,redirect])

    const submitHandler =(e) =>{
        e.preventDefault()
        // console.log("Submitted")
        dispatch(login(email,password))
    }

    return (
        
        <FormContainer>
            <h1>Sign In</h1>
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {loading && <Loader/>}
            <Form onSubmit = {submitHandler}>
                <Form.Group controlId="email" className="py-3">
                    <Form.Label> Email </Form.Label>
                    <Form.Control type='email' placeholder="Email" value = {email}onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password" className="py-2">
                    <Form.Label> Password </Form.Label>
                    <Form.Control type='password' placeholder="Password" value = {password}onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant = 'primary'>
                    Sign In
                </Button>
                <Row className="py-3">
                    <Col>
                        New user? <Link to={redirect?`/register?redirect=${redirect}` : '/register'}>
                            Register
                        </Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default LoginScreen