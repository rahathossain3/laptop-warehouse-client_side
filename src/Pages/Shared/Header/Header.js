import React from 'react';
import { signOut } from 'firebase/auth'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import './Header.css'
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading] = useAuthState(auth)

    if (loading) {
        <Loading></Loading>
    }

    //for sign out
    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='text-white'>
                    <Navbar.Brand as={Link} to="/home" >
                        <span className='site-title' id=""> Laptop <small>Warehouse</small></span>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            {/* when have user */}
                            {/*  {user ?
                                <>
                                    <Nav.Link as={Link} to="/manageitems" className='header-links'>Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="/addanitem" className='header-links'>Add Item</Nav.Link>

                                </>
                                :
                                <></>
                            } */}

                            <Nav.Link as={Link} to="/manageitems" className='header-links'>Manage Items</Nav.Link>
                            <Nav.Link as={Link} to="/addanitem" className='header-links'>Add Item</Nav.Link>


                            <Nav.Link as={Link} to="/blogs" className='header-links'>Blogs</Nav.Link>

                        </Nav>
                        <Nav>

                            {/* if user login  (for working not login) */}
                            {
                                user ?
                                    <>
                                        {/* <NavDropdown title="Manage product" id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1" >Manage Items</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Add Item</NavDropdown.Item>

                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">My Items</NavDropdown.Item>
                                        </NavDropdown> */}

                                        <Nav.Link as={Link} to="#userProfile" className='header-links'>
                                            <span>{user?.displayName}</span>
                                        </Nav.Link>

                                        <button className='btn btn-dark text-warning ' onClick={handleSignOut}>Sign Out</button>
                                    </>


                                    :
                                    <>
                                        <Nav.Link as={Link} className=" header-links ms-0 px-0" to="/login">Login  </Nav.Link>

                                        <Nav.Link as={Link} className='header-links' to="/registration">Registration</Nav.Link>
                                    </>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;