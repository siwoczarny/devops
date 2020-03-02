import React from 'react';
import '../../styles/elements/Services.scss';
//bootstrap
import { Row, Col } from 'react-bootstrap';

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="services_title">usługi</h2>
            <div className="services_links">
            <Row>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Administracja serwerami</a> 
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Ochronaprzed atakamiDDoS i WAF</a>
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
                        <a href="...">Zarządzaniesieciami</a>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">BodyLeasing</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">HighAvailability</a>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">Audyty</a> 
                    </div>
                </Col>
                <Col md={4}>
                    <div className="services_box">
                        <a href="...">PrivateCloud</a> 
                    </div>
                </Col>
            </Row>
            </div>
        </section>
    );
}
 
export default Services;