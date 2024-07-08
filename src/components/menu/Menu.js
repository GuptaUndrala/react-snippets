import React from 'react';
import './Menu.css';

function Menu({setActiveComponent}) {
    return (
        <ul className="pages-list">
            <li onClick={() => setActiveComponent('ChildPageOne')}>Home</li>
            <li onClick={() => setActiveComponent('ChildPageTwo')}>About Us</li>
            <li onClick={() => setActiveComponent('ChildPageThree')}>Services</li>
        </ul>
    );
}

export default Menu;