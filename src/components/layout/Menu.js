import React, { Component } from 'react';
import '../../styles/layout/Menu.scss';

class Menu extends Component {
    state = {
        menuOpen: false,
    }

    handleClickMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() { 
        const {menuOpen} = this.state;
        const list = [
            {name: "usługi", id: "#services"},
            {name: "case study", id: "#caseStudy"},
            {name: "o nas", id: "#about"},
            {name: "technologie", id: "#technology"},
            {name: "kontakt", id: "#contact"},
        ]

        const menu = list.map(item => (
            <li key={item.name}>
                <a 
                  href={item.id}
                  onClick={this.handleClick}>
                    {item.name}
                </a>
            </li>
        ))
        return (
            <nav className="menu_nav">
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
                <ul className={`menu_list${menuOpen ? " menu_list--open" : ""}`}>
                    {menu}
                </ul>
            </nav>
        );
    }
}
 
export default Menu;