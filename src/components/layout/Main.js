import React from 'react';
import '../../styles/layout/Main.scss';
//elements
import Start from '../elements/Start';
import Services from '../elements/Services';
import CaseStudy from '../elements/CaseStudy';
import About from '../elements/About';
import Technology from '../elements/Technology';
import Contact from '../elements/Contact';

const Main = () => {
    return (
        <main className="main">
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
        </main>
    );
}
 
export default Main;