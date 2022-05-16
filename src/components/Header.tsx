import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Inventory Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <NavDropdown title="Stock" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Import</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header