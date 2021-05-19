import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
// import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

// import { logout } from '../actions/userActions';
// import { logout as log } from '../actions/adminActions'
import Logo from '../images/rugi.jpg'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin



    const logoutAdmin = () => {

    }



    return (
        <header>
            <Navbar bg="dark" variant="dark" expand='lg' collapseOnSelect>
                <Container>

                    <Navbar.Brand href="/">
                        <img src={Logo} style={{ width: "50px", height: "50px", borderRadius: "80px" }} alt="fireSpot" />
                        <span className="mx-3">REGISTRY SYSTEM</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>

                        <Nav className='ml-auto'>

                            {userInfo ? (
                                <>


                                    <Nav.Link onClick={logoutAdmin}>Logout</Nav.Link>


                                </>

                            ) : (
                                    <>
                                        <Nav.Link href="/about">About</Nav.Link>
                                        <Nav.Link href="/help">Help</Nav.Link>
                                        <Nav.Link href="/faq">FAQ</Nav.Link>
                                    </>
                                )}

                            {/* {!userInfo == 'registerer' ? (
                                <>
                                    <Link to='/staffs'>
                                        <Nav.Link>Staffs </Nav.Link>
                                    </Link>

                                    <Link to='/officers'>
                                        <Nav.Link>Officer</Nav.Link>
                                    </Link>

                                </>
                            ) : ''} */}

                        </Nav>
                        <Nav >
                            <Nav.Link href="/login">Staff</Nav.Link>
                            <Nav.Link href="/admin/login">Admins</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header