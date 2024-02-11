import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link,useLocation, useNavigate } from "react-router-dom"

function SearchBar() {
    const [query, setQuery] = useState('')

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/?query=${query}`);
        } else {
            navigate('/');
        }
    };

    return (
    <Form onSubmit={submitHandler} className="d-flex">
        <Form.Control
            type = 'text'
            name = 'query'
            onChange={(e)=> setQuery(e.target.value)}
            className = 'mr-sm-2 ml-sm-5'
        ></Form.Control>
        <Button type='submit' variant = 'outline-success' className='p-2'>
            Search
        </Button>
    </Form>
    )
}

export default SearchBar
