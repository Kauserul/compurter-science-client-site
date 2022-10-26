import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import PremiumDetails from '../PremiumDetails/PremiumDetails';
import './premiumAccess.css'
import { FaBook, FaGlobe, FaHome, FaRegClock, FaRegUser, FaUsers } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';

const PremiumAccess = () => {
    const premiumCourse = useLoaderData();
    const { lesson, enrolled, language, duration, img, author, lectures, cost } = premiumCourse
    // console.log(premiumCourse)
    

    return (
        <div>
            <Container className='mt-0 pb-0 mb-0'>
                <Row>
                    <Col lg='7' className='me-5 mb-0'>
                        <PremiumDetails premiumCourse={premiumCourse}></PremiumDetails>
                    </Col>
                    <Col lg='4'>
                        <Card style={{ width: '21rem' }} className='p-2 me-auto'>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>

                                </Card.Title>
                                <Card.Text className='d-flex justify-content-between align-items-center'>
                                    <h4>{cost}</h4>
                                    <div className='discount'>50% Off</div>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><FaHome></FaHome> Instructor : {author.name}</ListGroup.Item>
                                {/* <ListGroup.Item><FaBook></FaBook> Lectures : {lectures}</ListGroup.Item> */}
                                <ListGroup.Item><FaRegClock></FaRegClock> Duration : {duration}</ListGroup.Item>
                                <ListGroup.Item><FaUsers></FaUsers> Enrolled  : {enrolled} </ListGroup.Item>
                                <ListGroup.Item><FaGlobe></FaGlobe> Language   : {language}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <h3>Payment:</h3>
                                <Button variant="outline-primary" className='me-2'>Bikash</Button>
                                <Button variant="outline-primary">Nagod</Button>
                            </Card.Body>
                            <Button variant="primary">Add to card</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className='mt-0 pt-0'>
                <Link to='/course'><Button variant="outline-primary">Back to course</Button></Link>

            </div>
        </div>
    );
};

export default PremiumAccess;