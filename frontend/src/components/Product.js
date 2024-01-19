import React from 'react'
import { Card } from 'react-bootstrap'

function Product({product}) {
  return (
    <Card className='py-3 my-3 p-4'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image}/>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <strong>{product.name}</strong><br/>
        </a>
          {product.Display}<br/>
          {product.Processor}<br/>
          {product.Camera}<br/>
          {product.Features}<br/>
      </Card.Body>
    </Card>
  )
}

export default Product
