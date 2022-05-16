import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav className="w-100">
                    <div className="row w-100">
                        <div className="col">
                            <Nav.Link href="/">About us</Nav.Link>
                            <Nav.Link href="/">Contact</Nav.Link>
                            <Nav.Link href="/">Services</Nav.Link>
                        </div>
                        <div className="col">
                            <Nav.Link href="/">Facebook</Nav.Link>
                            <Nav.Link href="/">Instagram</Nav.Link>
                            <Nav.Link href="/">Twitter</Nav.Link>
                        </div>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Footer;