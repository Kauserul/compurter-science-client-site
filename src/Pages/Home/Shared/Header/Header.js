import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container className='d-flex justify-content-between'>
                <div>
                    <Navbar.Brand href="#home">educal</Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"className='me-4 text-dark'>Course</Nav.Link>
                        <Nav.Link href="#features" className='me-4 text-dark'>FAQ</Nav.Link>
                        <Nav.Link href="#pricing" className='me-5 text-dark'>Blog</Nav.Link>
                        <Link to='/login'><Button variant="outline-success">Log In</Button></Link>
                    </Nav>
                    
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;