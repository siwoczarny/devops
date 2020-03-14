import React from 'react';
import '../../styles/elements/About.scss';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about_block">
                <h2 className="about_question">Masz<br/>jakieś pytania?</h2>
                <div className="about_answer">
                    <Link to="contact" spy={true} smooth={true} duration={500} >Tak, mam</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} >Owszem</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} >Tak</Link>
                </div>
            </div>
            <h3 className="about_title">o nas</h3>
            <div className="about_text">
                <p>Nam posuere. Quisque nunc. Etiam commodo tincidunt wisi eu ipsum. Nulla ante. Vivamus est. Donec vel nibh. Cras lacus scelerisque justo nibh, sollicitudin eu, facilisis est pretium eu, fringilla sed, fermentum pede, at est. Ut laoreet commodo, tincidunt vel, velit. Mauris ornare mi id rutrum posuere sit amet, sollicitudin fringilla. In venenatis augue at risus dolor libero quis ipsum. Nam cursus, mi at tortor. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Maecenas nec libero. Vestibulum tempus purus at erat. Duis neque ac nisl. Curabitur at nulla. Etiam tellus. Cras hendrerit wisi. Nam aliquet elit. Aenean mollis orci.<br /><br />Mauris ornare mi id rutrum posuere sit amet, sollicitudin fringilla. In venenatis augue at risus dolor libero quis ipsum. Nam cursus, mi at tortor. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Maecenas nec libero. Vestibulum tempus purus at erat. Duis neque ac nisl. Curabitur at nulla. Etiam tellus. Cras hendrerit wisi. Nam aliquet elit. Aenean mollis orc</p>
            </div>
            
        </section>
    );
}
 
export default About;