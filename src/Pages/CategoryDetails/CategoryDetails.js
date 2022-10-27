import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const CategoryDetails = ({ course }) => {
    const ref = React.createRef();
    const { img, title, details, id } = course;
    return (
        <Container>
            <div className='d-flex justify-content-between mb-3 mt-3'>
                <div>
                </div>
                <div className=''>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}><span className='pdf'>Download PDF <FaDownload></FaDownload></span></button>}
                    </Pdf>
                </div>
            </div>
            <Row>
                <Col lg='6' ref={ref}>
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