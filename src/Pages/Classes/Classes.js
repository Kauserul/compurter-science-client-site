import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import CourseSummary from '../CourseSummary/CourseSummary';

const Classes = () => {
    const allCourse = useLoaderData()
    return (
        <div className='container'>
            <Container>
                <Row>
                    <Col lg='2'  className='mt-5'>
                        <Categories></Categories>
                    </Col>
                    <Col lg='10'>
                        <div className='course mb-5'>
                            {
                                allCourse.map(course => <CourseSummary
                                    key={course.id}
                                    course={course}
                                ></CourseSummary>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Classes;