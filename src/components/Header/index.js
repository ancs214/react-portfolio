import React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <header>
            <h1>
                <Link to='/'>Ashley-Noel Swarn</Link>
            </h1>
            <div className='h2'>
                <Nav />
            </div>
        </header>
    )
}

export default Header;


    