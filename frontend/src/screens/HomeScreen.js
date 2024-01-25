import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'

function HomeScreen() {
  //using react-setstate
  // const [products,setProducts] = useState([]);
  // useEffect(()=>{
  //   async function fetchProducts(){
  //     const { data } = await axios.get('/api/products/')
  //     setProducts(data)
  //   }
  //   fetchProducts();
  // },[])

  //using redux
  const dispatch = useDispatch();
  const productList = useSelector(state=>state.productList)
  const {error,loading,products} = productList
  useEffect(()=>{
    dispatch(listProducts())
  },[])
  // const products =[];

  return (
    <div>
      <h1>Products</h1>
      {loading? <h3> Loading... </h3>
      :error?<h3>{error}</h3>
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
