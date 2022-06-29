import React from 'react';


function Nav() {

    return (
        <nav>
            <ul className="flex-row flex-end">
                <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#Portfolio">
                        Portfolio
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#Contact">
                        Contact
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#Resume">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;