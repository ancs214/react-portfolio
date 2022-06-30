import React from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <header className='flex space-between align-center my-5 mx-2 px-2'>
            <h1>
                <Link to='/'>Ashley-Noel Swarn</Link>
            </h1>
            <Nav />
        </header>
    )
}

export default Header;


