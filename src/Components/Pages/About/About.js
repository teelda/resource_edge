import React from 'react'
import Cards from '../../AboutCards/Cards'
import { aboutObjOne, aboutObjTwo, aboutObjThree } from './CardData'

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="aboutHeading">
                    <h1 className="dark">Human Resources</h1>
                    <p>Onboard new employees, manage the employee lifecycle and measure employee performance.</p>
                </div>
                <div className="aboutCard">
                    <div>
                        <Cards {...aboutObjOne} />
                    </div>
                    <div>
                        <Cards {...aboutObjTwo} /> 
                    </div>
                    <div> 
                        <Cards {...aboutObjThree} />
                    </div>
                </div>  
                <div className="about__img">
                    <img src="Images/about-svg.svg  " alt="" className="about-image" />
                </div>        
            </div>
        </>
    )
}

export default About
