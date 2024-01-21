import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='py-3 my-3 p-4'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}/>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <strong>{product.name}</strong><br/>
        </Link>
          {product.Processor}<br/>
          <br/>
          <h4>Price: {product.Price}</h4><br/>
      </Card.Body>
    </Card>
  )
}

export default Product
