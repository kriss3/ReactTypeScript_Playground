import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='navBar'>
            <ul>
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/about/'>About</NavLink></li>
                <li><NavLink to='/playground/'>Playground</NavLink></li>
                <li><NavLink to='/lists/'>Lists</NavLink></li>
                <li><NavLink to='/events/'>Events</NavLink></li>
                <li><NavLink to='/api/'>Apis</NavLink></li>

            </ul>
        </nav>
    );
};

export default Navbar;