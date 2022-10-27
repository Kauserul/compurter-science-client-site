import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-100 justify-content-center align-items-center'>
            <h2>Page not found</h2>
            <Link to='/'>Go to home</Link>
        </div>
    );
};

export default ErrorPage;