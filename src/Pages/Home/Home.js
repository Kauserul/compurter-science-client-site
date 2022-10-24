import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home container mt-2 rounded'>
            <div className='home-title w-50'>
                <h2 className='text-white fs-1'>Access 2700+
                    Onlineyellow-shape Tutorial From Top Instructor.

                </h2>
                <p className='text-white fs-5'>Meet university,and cultural institutions, who'll share their experience.</p>
                <Link to='/course' className='btn-course'>
                    <Button className='d-block mt-4 text-white ' variant="info">View All Course</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;