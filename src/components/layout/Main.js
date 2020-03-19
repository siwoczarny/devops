import React, { Component } from 'react';
import '../../styles/layout/Main.scss';
//logo
import logo from '../../images/logo.png';
//elements
import Start from '../elements/Start';
import Services from '../elements/Services';
import CaseStudy from '../elements/CaseStudy';
import About from '../elements/About';
import Technology from '../elements/Technology';
import Contact from '../elements/Contact';
import Footer from '../elements/Footer';

class Main extends Component {
    state = {  }
    render() { 
        return (
        <>
        <div className="main_title">
            <img src={logo} alt=""/>
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
            <Footer />
        </div>
        </>
        );
    }
}
 
export default Main;
 
