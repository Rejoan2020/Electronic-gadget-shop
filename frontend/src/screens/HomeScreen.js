import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useLocation, useNavigate } from "react-router-dom";

import { Pagination } from "antd";

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, currPage, totalPages, totalItems } =
    productList;

  const location = useLocation();
  let keyword = location.search;

  console.log(keyword);
  console.log(products);

  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const handleChange = (page) => {
    setCurrentPage(page); // Update the current page state
  };

  useEffect(() => {
    dispatch(listProducts(currentPage, keyword));
  }, [dispatch, currentPage, keyword]);

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage vant="danger" child={error}></ErrorMessage>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}

      <Pagination
        onChange={handleChange} // Pass the handleChange function
        defaultCurrent={currPage} // Set default current page to currentPage state
        pageSize={totalPages} // Set the number of items per page
        total={totalItems} // Set the total number of items (replace 100 with the actual count)
      />
    </div>
  );
}

export default HomeScreen;
