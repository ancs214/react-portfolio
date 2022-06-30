import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

    return (
        <div>
            <ul>
                <li className="mx-2">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined 
                        }       
                    >
                        About Me
                    </NavLink>
                </li>
                <li className="mx-2">
                    <NavLink to='/projects'>Portfolio</NavLink>
                </li>
                <li className="mx-2">
                    <NavLink to='/contact'>Contact Me</NavLink>
                </li>
                <li className="mx-2">
                    <NavLink to='/resume'>Resume</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;