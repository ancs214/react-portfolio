import React from 'react';


function Header() {
    return (
        <section class="section">
            <div class="container">
                <nav class="navbar" role="navigation" aria-label="main navigation">


                    <div class="navbar-menu navbar is-warning">
                    <h1 class="title is-1">
                        Ashley-Noel Swarn
                    </h1>
                        <div class="navbar-end">
                            <a class="navbar-item">
                                About menu      
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
            </div>
        </section>
    )
}

export default Header;