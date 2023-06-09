import React from "react";
import { NavLink } from 'react-router-dom';


const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/Bees'>Bees</NavLink></li>
            <li><NavLink to='/Space'>Space</NavLink></li>
            <li><NavLink to='/Art'>Art</NavLink></li>
        </ul>
    </nav>
);


export default Nav;