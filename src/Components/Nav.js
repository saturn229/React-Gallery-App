import React from "react";
import { NavLink } from 'react-router-dom';


const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to={'/search/Bees'}>Bees</NavLink></li>
            <li><NavLink to={'/search/space'}>Space</NavLink></li>
            <li><NavLink to={'/search/art'}>Art</NavLink></li>
        </ul>
    </nav>
);


export default Nav;