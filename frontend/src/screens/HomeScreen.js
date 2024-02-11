import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import { useLocation, useNavigate } from 'react-router-dom'

function HomeScreen({history}) { 
  const dispatch = useDispatch();
  const productList = useSelector(state=>state.productList)
  const {error,loading,products} = productList

  const location = useLocation();
  let keyword = location.search;
  console.log(keyword)

  useEffect(()=>{
    dispatch(listProducts(keyword))
  },[dispatch,keyword]) 

  return (
    <div>
      <h1>Products</h1>
      {loading? <Loader/>
      :error?<ErrorMessage vant = 'danger' child = {error}></ErrorMessage>
      :<Row>
      {products.map(product=>(
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product = {product}/>
          </Col>
      ))}
    </Row>
      }
    </div>
  )
}

export default HomeScreen
