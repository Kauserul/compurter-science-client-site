import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryDetails = ({course}) => {
    const { img, title, details, id } = course;
    return (
        <Container>
            <div className='d-flex justify-content-between mb-0 mt-3'>
                <div>
                </div>
                <Button variant="primary" className=''>Download pdf</Button>
            </div>
            <Row>
                <Col lg='6'>
                    <Image style={{ width: '500px', height: '520px' }} src={img}></Image>
                </Col>
                <Col lg='6'>
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

export default CategoryDetails;