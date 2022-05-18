import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
const BfHead = (props: any) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">Inventory</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">AboutUs</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title={[<FaUserCircle size={20}/>, ' Hello, User!']} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Register</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Forgot Password
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BfHead;