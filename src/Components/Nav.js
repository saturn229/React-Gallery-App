import React from "react";
import { NavLink } from 'react-router-dom';


const Nav = () => (
    <nav className="main-nav">
        <ul>
            <li><NavLink to='/Bees'>Bees</NavLink></li>
            <li><NavLink to='/Sunset'>Sunset</NavLink></li>
            <li><NavLink to='/Cats'>Cats</NavLink></li>
        </ul>
    </nav>
);


export default Nav;
