import React from 'react';
import { signOut } from 'firebase/auth'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)


    //for sign out
    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className=' text-white'>
                    <Navbar.Brand as={Link} to="/home" >
                        <span className='site-title' id=""> Laptop <small>Warehouse</small></span>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login">Items</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link as={Link} to="#deets">
                                <span>{user?._displayName}Md. Rahat Hossain Imon</span>
                            </Nav.Link>

                            {/* if user login  (for working not login) */}
                            {
                                !user ?
                                    <>
                                        <NavDropdown title="Manage product" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Manage Items</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Add Item</NavDropdown.Item>

                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">My Items</NavDropdown.Item>
                                        </NavDropdown>

                                        <button className='btn btn-dark text-warning ' onClick={handleSignOut}>Sign Out</button>
                                    </>


                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;