import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';
import './Course.css'

const Course = () => {
    const allCourse = useLoaderData()
    return (
        <div className='container'>
            <h1>This is course {allCourse.length}</h1>
            <div className='course mb-5'>
                {
                    allCourse.map(course => <CourseSummary
                        key={course.id}
                        course={course}
                    ></CourseSummary>)
                }
            </div>
        </div>
    );
};

export default Course;