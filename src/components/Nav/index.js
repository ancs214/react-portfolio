import React from 'react';


function Nav() {
    return (
        <section class="header">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-menu navbar is-warning">
                    <h1 class="title is-1">
                        Ashley-Noel Swarn
                    </h1>
                        <div class="navbar-end title">
                            <a class="navbar-item">
                                About Me      
                            </a>
                            <a class="navbar-item">
                                Portfolio
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <a class="navbar-item">
                                Resume
                            </a>
                        </div>
                    </div>
                </nav>
        </section>
    )
}

export default Nav;