import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

    return (
        <div>
            <ul>
                <li className="mx-2">
                    <NavLink
                        to='/react-portfolio'
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        }
                    >
                        About Me
                    </NavLink>
                </li>
                <li className="mx-2">
                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        }
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li className="mx-2">
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        }
                    >
                        Contact Me
                    </NavLink>
                </li>
                <li className="mx-2">
                    <NavLink
                        to='/resume'
                        className={({ isActive }) =>
                            isActive ? 'active' : undefined
                        }
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;