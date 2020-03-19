import React from 'react';
import '../../styles/elements/Footer.scss';
//bootstrap
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Row>
            <Col md={4}>
                    <div className="footer_links">
                        <a href="...">O nas</a>
                        <a href="...">Usługi</a>
                        <a href="...">Portfolio</a>
                        <a href="...">Polityka prywatności</a>
                        <a href="...">Linki</a>
                        <a href="...">React</a>
                        <a href="...">PHP</a>
                        <a href="...">UX/UI Design</a>
                        <a href="...">Scrum Process</a>
                        <a href="...">QA</a>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="footer_links">
                        <a href="...">Usługa Administracyjna</a>
                        <a href="...">Usługa DevOps</a>
                        <a href="...">Bezpieczeństwo</a>
                        <a href="...">Bezpieczeństwo maks</a>
                        <a href="...">High Availability</a>
                        <a href="...">Bode Leasing</a>
                        <a href="...">Audyt</a>
                        <a href="...">Cloud</a>
                        <a href="...">Migracje</a>
                        <a href="...">Zarządzanie</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="footer_caption">Copyright &copy; Maciej Chrustowski 2019</div>
            </Row>
        </footer>
    );
}
 
export default Footer;