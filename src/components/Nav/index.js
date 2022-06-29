import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
      
            <ul className="flex-row flex-end">
                <li className="mx-2">
                    <Link to='/'> About Me </Link>
                </li>
                <li className="mx-2">
                    <Link to='/projects'>Portfolio</Link>
                </li>
                <li className="mx-2">
                    <Link to='/contact'>Contact Me</Link>
                </li>
                <li className="mx-2">
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
   
    )
}

export default Nav;