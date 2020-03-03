import React from 'react';
import '../../styles/elements/Services.scss';
//bootstrap
import { Row, Col } from 'react-bootstrap';

const Services = () => {
    return (
        <section className="services" id="services">
            <h3 className="services_title">usługi</h3>
            <div className="services_links">
            <Row>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Administracja serwerami</a> 
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Ochrona przed atakami DDoS i WAF</a>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Migracje</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Usługi DevOps</a>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Zarządzanie sieciami</a>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Body Leasing</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">High Availability</a>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Audyty</a> 
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Private Cloud</a> 
                    </div>
                </Col>
            </Row>
            </div>
            <div className="services_footnote">
                <p>Jeżeli jest coś, czego potrzebujesz, a nie widzisz tego w usługach wymienionych wyżej <a href="#contact">napisz</a>.</p>
            </div>
        </section>
    );
}
 
export default Services;