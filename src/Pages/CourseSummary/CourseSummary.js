import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight, FaBook, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './CourseSummary.css'

const CourseSummary = ({ course }) => {
    const { img, title, lesson, ratting, details, cost, id } = course
    return (
        <div className=''>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className='d-flex justify-content-between mt-2 mb-3'>
                        <span><FaBook></FaBook> {lesson}</span>
                        <span className='d-flex align-items-center'><FaStar className='text-warning me-2'></FaStar> {ratting}</span>
                    </div>
                    <Card.Title>{title}</Card.Title>

                    <Card.Text>
                        {
                            details?.length > 80 ?
                                <span>{details.slice(0, 80) + '...'}</span>
                                :
                                <span>{details}</span>
                        }
                    </Card.Text>

                    <Card.Footer className="mt-4 d-flex align-items-center justify-content-between">
                        <div>
                            <h4>{cost}</h4>
                        </div>
                        <div>
                            <Link to={`/course/${id}`}><Button variant="warning">More <FaArrowRight></FaArrowRight></Button></Link>
                        </div>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummary;