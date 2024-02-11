import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import { logout } from "../actions/userActions";
import SearchBar from "./SearchBar";

function Header() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  const logoutHandler =() => {
    // console.log("logout")
    dispatch(logout())
  }
  
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>E-GadgetS</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
              
              <Nav className="mr-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>cart</Nav.Link>
                </LinkContainer> 
                {userInfo?(
                  <NavDropdown title={userInfo.name} id = 'username'>
                      <LinkContainer to='/profile'>
                          <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ):(
                    <LinkContainer to="/login">
                      <Nav.Link><i className="fas fa-user"></i>login</Nav.Link>
                    </LinkContainer>
                )}

              </Nav>
              
              <SearchBar/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
