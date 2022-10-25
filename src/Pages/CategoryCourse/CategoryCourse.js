import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';
import CourseDetails from '../CourseDetails/CourseDetails';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const CategoryCourse = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse)
    return (
        <div className='container'>
            <Container>
                <Row>
                    
                    <Col>
                        <div className='mb-5'>
                            {
                                singleCourse.map(course => <CategoryDetails
                                    key={course.id}
                                    course={course}
                                ></CategoryDetails>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoryCourse;