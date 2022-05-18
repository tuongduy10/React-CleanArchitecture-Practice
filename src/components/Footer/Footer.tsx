import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './footer.scss'

const Footer = () => {
    return (
        <Navbar className="nav-footer" bg="light" expand="lg">
            <Container>
                <Nav className="w-100">
                    <div className="row w-100 footer-wrapper">
                        <div className="col">
                            <Nav.Item>About us</Nav.Item>
                            <Nav.Link href="/">Support</Nav.Link>
                            <Nav.Link href="/">Contact</Nav.Link>
                            <Nav.Link href="/">Services</Nav.Link>
                        </div>
                        <div className="col">
                            <Nav.Item>Socials</Nav.Item>
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