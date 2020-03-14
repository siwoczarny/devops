import React from 'react';
import '../../styles/elements/CaseStudy.scss';
//tabs
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs';
//photos
import photo1 from '../../images/001.jpg';
import photo2 from '../../images/002.jpg';
import photo3 from '../../images/003.jpg';

const firstphoto = <img src={photo1} alt="first"></img>
const secondphoto = <img src={photo2} alt="second"></img>
const thirdphoto = <img src={photo3} alt="third"></img>

function handleClick() {
    alert('Link do danego projektu - hop!')
}

const CaseStudy = () => {
    return ( 
        <section className="case-study" id="case-study">
            <h3 className="case-study_title">case study</h3>
            <div className="case-study-stack">
                <Tabs defaultActiveKey="first-project" id="uncontrolled-tab-example">
                    <Tab eventKey="first-project" title={firstphoto}>
                        <div className="case-study_description">
                            <h5>projekt 1</h5>
                            <p>Nam posuere. Quisque nunc. Etiam commodo tincidunt wisi eu ipsum. Nulla ante. Vivamus est. Donec vel nibh. Cras lacus scelerisque justo nibh, sollicitudin eu, facilisis est pretium eu, fringilla sed, fermentum pede, at est. Ut laoreet commodo, tincidunt vel, velit. Mauris ornare mi id rutrum posuere sit amet, sollicitudin fringilla. In venenatis augue at risus dolor libero quis ipsum. Nam cursus, mi at tortor. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Maecenas nec libero. Vestibulum tempus purus at erat. Duis neque ac nisl. Curabitur at nulla. Etiam tellus. Cras hendrerit wisi. Nam aliquet elit. Aenean mollis orci.</p>
                            <a href="/" onClick={handleClick}>więcej</a>
                        </div>
                    </Tab>
                    <Tab eventKey="second-project" title={secondphoto}>
                        <div className="case-study_description">
                            <h5>projekt 2</h5>
                            <p>Nam posuere. Quisque nunc. Etiam commodo tincidunt wisi eu ipsum. Nulla ante. Vivamus est. Donec vel nibh. Cras lacus scelerisque justo nibh, sollicitudin eu, facilisis est pretium eu, fringilla sed, fermentum pede, at est. Ut laoreet commodo, tincidunt vel, velit. Mauris ornare mi id rutrum posuere sit amet, sollicitudin fringilla. In venenatis augue at risus dolor libero quis ipsum. Nam cursus, mi at tortor. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Maecenas nec libero. Vestibulum tempus purus at erat. Duis neque ac nisl. Curabitur at nulla. Etiam tellus. Cras hendrerit wisi. Nam aliquet elit. Aenean mollis orci.</p>
                            <a href="/" onClick={handleClick}>więcej</a>
                        </div>
                    </Tab>
                    <Tab eventKey="third-project" title={thirdphoto}>
                        <div className="case-study_description">
                            <h5>projekt 3</h5>
                            <p>Nam posuere. Quisque nunc. Etiam commodo tincidunt wisi eu ipsum. Nulla ante. Vivamus est. Donec vel nibh. Cras lacus scelerisque justo nibh, sollicitudin eu, facilisis est pretium eu, fringilla sed, fermentum pede, at est. Ut laoreet commodo, tincidunt vel, velit. Mauris ornare mi id rutrum posuere sit amet, sollicitudin fringilla. In venenatis augue at risus dolor libero quis ipsum. Nam cursus, mi at tortor. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Maecenas nec libero. Vestibulum tempus purus at erat. Duis neque ac nisl. Curabitur at nulla. Etiam tellus. Cras hendrerit wisi. Nam aliquet elit. Aenean mollis orci.</p>
                            <a href="/" onClick={handleClick}>więcej</a>
                        </div>  
                    </Tab>
                    </Tabs>
            </div>
        </section>
    );
}
 
export default CaseStudy;