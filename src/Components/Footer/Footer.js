import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="footer__image">
                    <img src="Images/unn-svg.svg" alt="" className="uni_nigeria" />
                    <img src="Images/tenece-svg.svg" alt="" className="tenece" />
                    <img src="Images/estate-svg.svg" alt="" className="private_estate" />
                    <img src="Images/genesys-svg.svg" alt="" className="genesys" />
                </div>
                <div className="footer__wrapper">
                    <div className="footer__heading">
                        <Link to='/' className="footer__logo" >
                            resource edge
                        </Link>
                        <p className="light">
                            Throw paperwork into the trash.    
                        </p>   
                    </div>
                    <div className="footer__icons__wrapper">
                        <div className="footer__icons">
                            <Link to='/' >
                                <FaFacebookSquare className="link__icon" />
                            </Link>
                            <Link to='/'>
                                <FaTwitter className="link__icon" />
                            </Link>
                            <Link to='/'>
                                <FaLinkedin className="link__icon" />
                            </Link>
                            <Link to='/'>
                                <FaInstagram  className="link__icon" />
                            </Link>
                        </div>
                        <div className="light">
                            <p className="smallText"> Copyright © Genesys DevStudio . All rights reserved </p>
                        </div>
                    </div> 
                </div>   
            </div>   
        </>
    )
}

export default Footer
