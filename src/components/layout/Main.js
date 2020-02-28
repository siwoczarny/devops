import React, { Component } from 'react';
import '../../styles/layout/Main.scss';
//elements
import Start from '../elements/Start';
import Services from '../elements/Services';
import CaseStudy from '../elements/CaseStudy';
import About from '../elements/About';
import Technology from '../elements/Technology';
import Contact from '../elements/Contact';

class Main extends Component {
    state = {  }
    render() { 
        return (
        <>
        <div className="main_title">
          <h1>LOGO</h1>
        </div>
        <div className="main_content">
            <Start />
            <Services />
            <CaseStudy />
            <About />
            <Technology />
            <Contact />
        </div>
        <div className="main_footer">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus maxime dignissimos assumenda fugiat beatae inventore neque dolorem porro. Perferendis voluptates deleniti ullam adipisci, nulla error nihil? Quaerat facilis culpa corporis?</p>
        </div>
        </>
        );
    }
}
 
export default Main;
 
