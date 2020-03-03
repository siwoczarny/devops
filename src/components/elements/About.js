import React from 'react';
import '../../styles/elements/About.scss';


const About = () => {
    return (
        <section className="about" id="about">
            <div className="about_block">
                <h2 className="about_question">Masz<br/>jakieś pytania?</h2>
                <div className="about_answer">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <h3 className="about_title">o nas</h3>
        </section>
    );
}
 
export default About;