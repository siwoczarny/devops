import React from 'react';
import '../../styles/elements/About.scss';


const About = () => {
    return (
        <section className="about" id="about">
            <div className="about_block">
                <h2 className="about_question">Masz<br/>jakieś pytania?</h2>
                <div className="about_answer">
                    <a href="#contact">Tak, mam</a>
                    <a href="#contact">Owszem</a>
                    <a href="#contact">Tak</a>
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