import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import { Row,Col,Image,Card,Button,ListGroup,ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'

function ProductScreen() {
    // console.log(props.match.params.id)
    const {id} = useParams();
    // const [prod,setProduct] = useState([]);
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading,error,prod } = productDetails

    useEffect(()=>{
        dispatch(listProductDetails(id))
    },[])
    // let prod = []
    return (
        <div>
            {loading?
            <Loader/>:error?<ErrorMessage vant = 'danger' child = {error}></ErrorMessage>:
            <Row >
                <Col md={6}> 
                    <Image src={prod.image} alt={prod.name} fluid></Image>
                </Col>
                <Col md={3} className='my-4'>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{prod.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating rating={prod.rating} rev = {prod.numReview} color = {'#FFFF00'}>
                            </Rating>
                                out of {prod.numReviews} Reviews
                        </ListGroupItem>
                        <ListGroupItem>
                            <h2><strong>Price:</strong> {prod.price}</h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Display:</strong> {prod.display}
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <strong>Processor:</strong> {prod.processor}
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <strong>Camera:</strong> {prod.camera}
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <strong>Features:</strong> {prod.features}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3} className='my-5'>
                    <ListGroup>
                        <ListGroupItem>
                            Price : {prod.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            In stock : {prod.countInStock==0?"Out of stock":"Available"}
                        </ListGroupItem>
                        
                        <ListGroupItem>
                            <Button className='btn-block' disabled={prod.countInStock==0}>Add to cart</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            }
            
            <Link to='/' className='btn btn-light my-3'> back </Link>
        </div>
    )
}

export default ProductScreen
