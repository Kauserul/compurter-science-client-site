import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaPen } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <Navbar bg="light" variant="light" className=''>
            <Container className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <FaPen className='me-1'></FaPen>
                    <Navbar.Brand><Link to='/' className='link-btn'>educal</Link></Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto">
                        <Nav.Link className='me-4 text-dark'><Link to='/course' className='link-btn'>Course</Link> </Nav.Link>
                        <Nav.Link className='me-4 text-dark'>FAQ</Nav.Link>
                        <Nav.Link className='me-5 text-dark'>Blog</Nav.Link>
                        <Link to='/login'><Button variant="outline-success">Log In</Button></Link>
                        {user.displayName}
                    </Nav>
                    
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;