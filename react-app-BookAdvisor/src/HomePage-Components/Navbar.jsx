import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="wrapHead">
                <Link to="/"  className="logoContainer"><img className="logo" src={"/src/imgs/logoBookAdvisor.jpeg"} alt="logo" height="50" width="50"></img></Link>
                <button className="menuButton" onClick={toggleMenu}>☰</button>
                <div className={isOpen ? "navLinks active" : "navLinks"}>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/Search"><p>Search</p></Link>
                    <Link to="/MyBooks"><p>My Books</p></Link>
                    <Link to="/Profile" className="profileLink">
                        <img className="userLogo desktopIcon" src={"/src/imgs/user.png"} alt="user icon" height="50" width="50"></img>
                        <p className="profileText mobileText" >My Profile</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;