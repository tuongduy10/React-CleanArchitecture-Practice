import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './header.scss'
import * as Icon from 'react-bootstrap-icons';
 
const Header = () => {
    return (
        <Navbar className="nav-header" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Inventory Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <Nav.Link href="/stock">Stock</Nav.Link>
                        <Nav.Link href="/stock">Users</Nav.Link>
                    </Nav>
                    <NavDropdown title="Username" id="basic-nav-dropdown">
                        <NavDropdown.Item className="d-flex align-items-center" href="#action/3.1">
                            <Icon.Person className='icon'/>
                            Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <Icon.Key className='icon'/>
                            Change password
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            <Icon.BoxArrowRight className='icon'/>
                            Log out
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header