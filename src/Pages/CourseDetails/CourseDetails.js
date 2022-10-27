import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { img, title, details, id } = courseDetails;
    return (
        <Container>
            <div className='d-flex justify-content-between mb-3 mt-3'>
                <div>
                </div>
                <span className='pdf'>Download PDF <FaDownload></FaDownload></span>
            </div>
            <Row>
                <Col lg='6'>
                    <Image className='w-sm-50' style={{ width: '500px', height: '520px' }} src={img}></Image>
                </Col>
                <Col lg='6' className='mt-4'>
                    <h2 className='fw-bold'>{title}</h2>
                    <p><small>{details}</small></p>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/classes/${id}`}><Button variant="outline-primary">Back to home</Button></Link>
                        <Link to={`/premium/${id}`}><Button variant="info">Get premium access</Button></Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;