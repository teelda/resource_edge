import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
       showButton();
    }, [])
    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="navbar">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    resource edge
                </Link>
                <div className="navbar-container container">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
               
                    <ul className={click ? 'nav-Menu active' : 'nav-Menu'}>
                        <li className="nav-item">
                            <Link to='/Features' className="nav-links" onClick={closeMobileMenu}>
                                Features
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/About' className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                    <ul className={click ? 'link-menu active' : 'link-menu'}>
                        <li className="link-item">
                            { button ? (
                                <Link to='/sign-in' className="nav-link" onClick={closeMobileMenu}>
                                    Sign in
                                </Link>
                            ) : (
                                <Link to='/sign-in' className="nav-link" onClick={closeMobileMenu}>
                                    <Button buttonSize='btn--wide'>Sign in</Button>
                                </Link>
                            )}
                        </li>
                        <li className="nav-btn link-item">
                            {button ? (
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--primary'>Sign up</Button>
                                </Link>
                            ): (
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--primary' buttonSize='btn--mobile'>Sign up</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>   
        </>
    )
}

export default Navbar
