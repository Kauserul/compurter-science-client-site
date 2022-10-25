import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';
import CourseDetails from '../CourseDetails/CourseDetails';

const CategoryCourse = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse)
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
                                singleCourse.map(course => <CourseSummary
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

export default CategoryCourse;