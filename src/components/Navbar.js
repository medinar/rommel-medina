import React from 'react'
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// REACT ROUTER DOM
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (    
        <nav className="navbar navbar-expand-lg navbar-light bg-dark align-middle">
            <div className="container">
            <NavLink to="/" className="navbar-brand align-middle">
                {/* <img src={logo} class="logo" alt="logo"/> */}
                <h2>
                    <span className="brand">medinar </span>                    
                    <span className="brand-dollar">&gt;_</span>
                </h2>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}}/>
            </button>                
            <div className="collapse navbar-collapse" id="navbarSupportedContent">                        
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <NavLink exact to="/" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about-me" className="nav-link">About Me</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/experience" className="nav-link">Experience</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact-me" className="nav-link">Contact Me</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
