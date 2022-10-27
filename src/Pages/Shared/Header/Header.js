import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaPen, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import { Image } from 'react-bootstrap';
import DarkMode from '../../../DarkMode/DarkMode';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <Navbar bg="light" variant="light" className='mb-3'>
            <Container className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <FaPen className='me-0 text-danger'></FaPen>
                    <Navbar.Brand><Link to='/' className='link-btn'>educal</Link></Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto d-flex align-items-center">
                        <Nav.Link className='me-4 text-dark'><Link to='/course' className='link-btn text-dark'>Course</Link> </Nav.Link>
                        <Nav.Link className='me-4 text-dark'><Link to='' className="link-btn text-dark">FAQ</Link></Nav.Link>
                        <Nav.Link className='me-4 text-dark'><Link to='/blog' className='link-btn text-dark'>Blog</Link></Nav.Link>
                        <Nav.Link className='me-4 text-dark'>Dark or Light</Nav.Link>

                        {
                            user?.uid ?
                                <div className='d-flex align-items-center'>
                                    <span>{user?.displayName}</span>
                                    <Button variant="success" className='ms-2' onClick={handleLogOut}>Log Out</Button>
                                </div>
                                :
                                <Link to='/login'><Button variant="outline-success" className=''>Log In</Button></Link>
                        }
                        <div className='ms-4'>
                            {
                                user?.photoURL ?
                                    <Image title={user?.displayName} style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                    :
                                    <></>
                            }
                        </div>

                    </Nav>
                        


                        

                </div>
            </Container>
        </Navbar>
    );
};

export default Header;