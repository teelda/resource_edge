import React from 'react'
import './FeaturesSection.css'

const FeaturesSection = ({
    headings,
    subDesc,
    iconImg,
    alt,
    subHeading,
    smallDesc,
    iconImg1,
    subHeading1,
    smallDesc1,
}) => {
    return (
        <>
           <div className="features__container">
                <div className="features__wrapper">
                    <div className="admin__features">
                        <h1>{headings}</h1>
                        <p>{subDesc}</p>
                    </div>
                    <div className="logistics-wrapper">
                        <img src={iconImg} alt={alt} className='features__icon-img' />
                        <h3 className="dark">{subHeading}</h3>
                        <p>{smallDesc}</p>
                    </div>
                    <div className="logistics-wrapper">
                        <img src={iconImg1} alt={alt} className='features__icon-img' />
                        <h3 className="dark">{subHeading1}</h3>
                        <p>{smallDesc1}</p>
                    </div>
                </div> 
            </div> 
        </>
    )
}

export default FeaturesSection
