import React, { Component } from 'react';
import '../../styles/layout/Menu.scss';
import Scrollspy from 'react-scrollspy';

class Menu extends Component {
    state = {
        menuOpen: false,
    }

    handleClickMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    handleClickLink = () => {
        console.log("working")
    }

    render() { 
        const {menuOpen} = this.state;
        const list = [
            {name: "usługi", id: "#services", section: 'services'},
            {name: "case study", id: "#case-study", section: 'case-study'},
            {name: "o nas", id: "#about", section: 'about'},
            {name: "technologie", id: "#technology", section: 'technology'},
            {name: "kontakt", id: "#contact", section: 'contact'},
        ]

        const sections = list.map(item => item.section);

        const menu = list.map(item => (
            <li key={item.name}>
                <a 
                  href={item.id}
                  onClick={this.handleClickLink}>
                    {item.name}
                </a>
            </li>
        ))
        return (
        <>
            <div className="menu_hamburger" onClick={this.handleClickMenu}>
                    <div
                        className={`hamburger_line hamburger_top${menuOpen ? "--open" : ""}`}
                    ></div>
                    <div
                        className={`hamburger_line hamburger_middle${menuOpen ? "--open" : ""}`}
                    ></div>
                    <div
                        className={`hamburger_line hamburger_bottom${menuOpen ? "--open" : ""}`}
                    ></div>
            </div>
            <nav className={`menu_nav${menuOpen ? " menu_nav--open" : ""}`}>
                <div className="menu_vertical-line"></div>
                <Scrollspy items={sections} currentClassName="is-current" offset={-50} className="menu_list">   
                    {menu}
                </Scrollspy>
                <div className="menu_vertical-line"></div>
            </nav>
            </>
        );
    }
}
 
export default Menu;