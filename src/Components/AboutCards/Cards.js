import React from 'react';
import './Cards.css';


const Cards = ({
    icon,
    alt,
    topLine,
    subDescription,
}) => {
    return (
        <>
            <div className="about-container-card">
                <div className="about__row">
                    <div className="about-col">
                        <div className="card-wrapper">
                            <img src={icon} alt={alt} className='about__icon-img' />
                            <h3 className="dark">{topLine}</h3>
                            <p>{subDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
