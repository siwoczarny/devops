import React from 'react';
import '../../styles/elements/CaseStudy.scss';
//bootstrap
import { Row, Col } from 'react-bootstrap';
//photos
import photo1 from '../../images/001.jpg';
import photo2 from '../../images/002.jpg';
import photo3 from '../../images/003.jpg';


const CaseStudy = () => {
    return (
        <section className="case-study" id="case-study">
            <h3 className="case-study_title">case study</h3>
            <div className="case-study_stack">
            <Row>
                <Col md={4}>
                    <div className="case-study_project active">
                        <a href="...">
                            <img src={photo1} alt="first project" />
                        </a> 
                    </div>
                </Col>
                <Col md={4}>
                    <div className="case-study_project">
                        <a href="...">
                            <img src={photo2} alt="second project" />
                        </a>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="case-study_project">
                        <a href="...">
                            <img src={photo3} alt="third project" />
                        </a>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="case-study_description">
                    <h5>projekt 1</h5>
                    <p>Nam posuere. Quisque nunc. Etiam commodo tincidunt wisi eu ipsum. Nulla ante. Vivamus est. Donec vel nibh. Cras lacus scelerisque justo nibh, sollicitudin eu, facilisis est pretium eu, fringilla sed, fermentum pede, at est. Ut laoreet commodo, tincidunt vel, velit. Mauris ornare mi id rutrum posuere sit amet, sollicitudin fringilla. In venenatis augue at risus dolor libero quis ipsum. Nam cursus, mi at tortor. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Maecenas nec libero. Vestibulum tempus purus at erat. Duis neque ac nisl. Curabitur at nulla. Etiam tellus. Cras hendrerit wisi. Nam aliquet elit. Aenean mollis orci.</p>
                    <a href="...">więcej</a>
                </div>
            </Row>
            </div>
        </section>
    );
}
 
export default CaseStudy;