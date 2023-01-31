import React from 'react'

function Nav() {
  return (
    <div>
        <div className='contenr-navbar'>

    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""></input>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="logo">Movis</h1>
        </div>
    </nav>
        </div>
    </div>
  )
}

export default Nav
