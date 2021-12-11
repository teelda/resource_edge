import React from 'react'
import FeaturesSection from '../../FeaturesSection/FeaturesSection'
import { featuresObjOne, featuresObjTwo } from './FeaturesData'


const features = () => {
    return (
        <>
            <div className="features-container__wrapper">
                <div className="featuresObj">
                    <div>
                        <FeaturesSection {...featuresObjOne} />
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src="Images/reportsList-svg.svg" className="features__imge" />
                </div>  
            </div>
            <div className="features-container__wrapper">
                <div className="featuresObj">
                    <div>
                        <FeaturesSection {...featuresObjTwo} />
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src="Images/finance-svg.svg" className="features__imge" />
                </div>  
            </div>
            
        </>
    )
}

export default features
