import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LogIn = () => {
    const {userLogIn, googleLogIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogIn = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        userLogIn(email, password)
        .then(result=>{
            const user =result.user;
            form.reset();
            navigate(from, {replace : true})
        })
        .catch(error => setError(error.message))
    }

    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(()=>{
            navigate(from, {replace : true})
        })
        .catch(error=>console.error(error))
    }

    return (
        <div className='w-50 m-auto mt-5'>
            <Form onSubmit={handleLogIn}>
                <h2>Log In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                
                <Form.Text className='d-block text-danger'>
                    {error}
                </Form.Text>

                <Button variant="primary" type="submit">
                    Log In
                </Button>
                
            </Form>
            <div className='mt-4'>
                <h6 className='mb-2'>Or Sign Up Using</h6>
                <Button onClick={handleGoogleLogIn} variant="outline-primary" className='me-3'>Google</Button>
                <Button variant="outline-primary">Github</Button>
            </div>
            <p className='mt-3'>First time this website? Please <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default LogIn;