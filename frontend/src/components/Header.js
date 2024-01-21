import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Meem Telecom</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>login</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
