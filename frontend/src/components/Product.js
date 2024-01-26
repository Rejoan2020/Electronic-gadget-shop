import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product({product}) {
  return (
    <Card className='py-3 my-3 p-4'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}/>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <strong><h4>{product.name}</h4></strong><br/>
        </Link>
          {product.processor}<br/>
          <Rating rating={product.rating} rev = {product.numReviews} color = {'#FFFF00'}/>
          out of {product.numReviews} Reviews
          <br/>
          <br/>
          <h4>Price: {product.price}</h4><br/>
      </Card.Body>
    </Card>
  )
}

export default Product
