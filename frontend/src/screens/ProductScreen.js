import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { Row,Col,Image,Card,Button,ListGroup,ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function ProductScreen() {
    // console.log(props.match.params.id)
    const {id} = useParams();

    const [prod,setProduct] = useState([]);
    
    useEffect(()=>{
        async function fetchProducts(){
            const { data } = await axios.get(`/api/products/${id}`)
            setProduct(data)
        }
        fetchProducts();
    },[])

    return (
        <div>
            {/* <Link to={'./'} className='btn btn-light my-3'> button</Link> */}
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
                            <Rating rating={prod.rating/prod.numReview *5} rev = {prod.numReview} color = {'#FFFF00'}>
                            </Rating>
                                out of {prod.numReview} Reviews
                        </ListGroupItem>
                        <ListGroupItem>
                            <h2><strong>Price:</strong> {prod.Price}</h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Display:</strong> {prod.Display}
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <strong>Processor:</strong> {prod.Processor}
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <strong>Camera:</strong> {prod.Camera}
                        </ListGroupItem>
                        
                        <ListGroupItem>
                        <strong>Features:</strong> {prod.Features}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3} className='my-5'>
                    <ListGroup>
                        <ListGroupItem>
                            Price : {prod.Price}
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
        </div>
    )
}

export default ProductScreen
