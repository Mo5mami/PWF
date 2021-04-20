import React from 'react'

function Header() {
    return (
        <div>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
  
            <header id="header" className="d-flex flex-column justify-content-center">

                <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#projects" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
                </nav>

            </header>
        </div>
    )
}

export default Header
