import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { userRegister, userUpdateProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoURL)

        userRegister(email, password)
            .then(result => {
                
                const user = result.user;
                handleUpdateUserProfile(name, photoURL)
                navigate('/')
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        userUpdateProfile(profile)
            .then(() => {})
            .catch(error => console.error(error));
    }

    return (
        <div className='w-50 m-auto mt-5'>
            <Form onSubmit={handleRegister}>
                <h2>Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter Your Photo URL" />
                </Form.Group>

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
                    Register
                </Button>
                <p className='mt-3'>Already have an account?Please <Link to='/login'>Log In</Link> </p>
            </Form>
        </div>
    );
};

export default Register;