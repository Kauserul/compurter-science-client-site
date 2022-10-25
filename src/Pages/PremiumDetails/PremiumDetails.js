import React from 'react';
import { FaUser } from 'react-icons/fa';

const PremiumDetails = ({ premiumCourse }) => {
    console.log(premiumCourse);
    const { title, author, photoURL, details, ratting } = premiumCourse
    return (
        <div>
            <h2 className='fs-1 mb-4'>{title}</h2>
            <div>
                <h2 className='mb-3'>Course Overview</h2>
                {details}
            </div>
            <div className='d-flex align-items-center justify-content-between mt-4'>
                <div className="d-flex align-items-center">
                    <FaUser className='me-3 fs-3'></FaUser>
                    <div>
                        <span className='d-block m-0'>Teacher</span>
                        <span className='m-0 fw-bold'>{author.name}</span>
                    </div>
                </div>
                <div>
                    <span>Last Update : </span>
                    <span className='fw-bold'>{author.lastUpdate}</span>
                </div>
                <div>
                    <span>Ratting : </span>
                    <span className='fw-bold'>{ratting}</span>
                </div>
            </div>
        </div>
    );
};

export default PremiumDetails;