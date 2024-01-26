import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams , useLocation, Link} from 'react-router-dom'
import { addToCart,removeitem } from '../actions/cartActions';
import { Col, ListGroupItem, Row, ListGroup, Image, Button, Card} from 'react-bootstrap';

function CartScreen() {
  const {id} = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const quantity = searchParams.get('quantity')

  const dispatch = useDispatch()

  const cart = useSelector(state=>state.cart)
  const {cartItems} = cart
  // console.log(cartItems)

  useEffect(()=>{
    if(id){
      dispatch(addToCart(id,quantity))
    }
  },[dispatch,id,quantity])

  const removeCart = (id)=>{
    dispatch(removeitem(id))
  }

  let totalItem = 0, totalPrice = 0;
  for(let i=0;i<cartItems.length;i++){
    totalItem += parseInt(cartItems[i].quantity)
    totalPrice += parseInt(cartItems[i].price)
  }
  
  return (
     
      <Row> 
        <Col md = {8}>
      <h1>Shopping cart</h1>
      {cartItems.length===0?
      <>
      <ListGroupItem>Empty cart</ListGroupItem>
      <ListGroupItem><Link to = '/'>Back</Link></ListGroupItem>
      </>
      :
      <>
      <ListGroup>
        {cartItems.map(item=>(
          <ListGroupItem key={item.prod}>
            <Row>
                <Row>
                  <Col md={2}><Link to={`/product/${item.prod}`}><Image src = {item.image} style={{ width: '100px', height: 'auto' }}fluid rounded></Image></Link></Col>
                  <Col md={3}>
                  <Link to={`/product/${item.prod}`}><Row> {item.name}</Row></Link>
                    <Row>Processor : {item.processor}</Row>
                    <Row>Display : {item.display}</Row>
                    <Row>Quantity : {item.quantity}</Row>
                  </Col>
                  <Col md={5} >
                    <Row><h4>{item.price}bdt</h4></Row>
                  </Col>
                  <Col md = {1}>
                    <Button type = 'button' variant='light' onClick={()=>removeCart(item.prod)}> 
                      <i className = 'fas fa-close'></i>
                    </Button>
                  </Col>
                </Row> 
            </Row>
          </ListGroupItem>

        ))}
      </ListGroup>
      </>
      }
      </Col>
      <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>Total ({totalItem}) items</h3>
                <h4>{totalPrice}</h4>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item className="text-center">
              <Button type='button' className='btn-block' disabled={cartItems.length===0}>
                Proceed to checkout
              </Button>
            </ListGroup.Item>
          </Card>
          
      </Col>

      </Row>
  )
}

export default CartScreen
