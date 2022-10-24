import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='w-50 m-auto mt-5'>
            <Form>
                <h2>Log In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                
            </Form>
            <div className='mt-4'>
                <h6 className='mb-2'>Or Sign Up Using</h6>
                <Button variant="outline-primary" className='me-3'>Google</Button>
                <Button variant="outline-primary">Github</Button>
            </div>
            <p className='mt-3'>First time this website? Please <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default LogIn;