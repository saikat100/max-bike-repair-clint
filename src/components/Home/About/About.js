import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import about from '../../../images/about-section.png';
import './About.css';

const About = () => {
    return (
        <section>
            <div className="service mt-5">
                 <h1 className="text-center service">
				<span className="text-brand">About</span> Us
			</h1>
            </div>
           
            <Container>
                <Row className="align-items-center justify-content-center banner">
                        <Col md={6}>
                            <div className="img-size">
                                <Image className="img-fluid" src={about} alt="..." />
                            </div>
                        </Col>
                    <Col md={6}>
                        <div>
                            <h3>Why Choose Us For Repair ?</h3>
                            <span className="animate-border border-black"></span>
                            <p className="text-muted mt-2"> <small>Lorem i psum dolor sit amet consectetur adipisicing elit. Nemo pariatur blanditiis voluptatem iusto. Repellat, fugiat mollitia. Architecto dignissimos labore aperiam odit rem, et odio possimus maxime. Accusantium reiciendis magnam repellendus voluptates  </small> </p>
                            <button className="btn-all">Read More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;