import React from 'react';
import '../../styles/layout/Menu.scss';

const Manu = () => {
    return (
        <navbar className="menu_navbar">
            <ul>
                <li>usługi</li>
                <li>case study</li>
                <li>o nas</li>
                <li>technologie</li>
                <li>kontakt</li>
            </ul>
        </navbar>
    );
}
 
export default Manu;