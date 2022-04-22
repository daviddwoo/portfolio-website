import React from 'react'
import './About.css'
import Picture from '../profile.jpeg'

const About = () => {
    return (
        <div className='ab'>
            <div className='ab-title'>
                <div className='ab-title-wrapper'>
                    <h1><span>👋 </span>there! I'm David Woo</h1>
                </div>
            </div>
            <div className='ab-info-wrapper'>
                <div className='ab-details'>
                    <div>
                        <img alt='' src={Picture} className='ab-pic'/>
                    </div>
                    <div className='ab-details-p'>
                        <p>
                            I currently work as a Validation Specialist in the biotech industry, with over 5+ years experience specializing in equipment 
                            validation. I previously attended Rutgers University majoring in chemical engineering.
                        </p>
                        <p>
                            I am a recent graduate of the Fullstack Academy's part-time Flex Immersive program, currently seeking new opportunities to break into the
                            tech field. I am passionate about learning and improving my skillset to become a valuable asset to any team.
                        </p>
                        <p>
                            While I'm not coding, I am an avid golfer, music lover, basketball enthusiast (go Knicks!) and am learning how to DJ. Please feel free to reach out to me
                            with a message or connect with me on LinkedIn!
                        </p>
                    </div>
                </div>
            </div>
            <hr className='ab-hr'/>
            {/* <div className='ab-exp'>
                <div className='ab-title'>
                    <div className='ab-title-wrapper'>
                        <h3>Experience</h3>
                    </div>
                </div>
                <div className='ab-exp-wrapper'>
                    <div className='ab-exp-info'>
                        <div className='ab-details-title'>
                            <h2>2019 - Present</h2>
                        </div>
                        <div className='ab-details-p'>
                            <h2>Minaris Regenerative Medicine · Allendale, NJ</h2>
                            <span>Validation Specialist</span>
                        </div>
                    </div>
                </div>
                <div className='ab-exp-wrapper'>
                    <div className='ab-exp-info'>
                        <div className='ab-details-title'>
                            <h2>2017 - 2019</h2>
                        </div>
                        <div className='ab-details-p'>
                            <h2>Allergan · Branchburg, NJ</h2>
                            <span>Quality Engineer I</span>
                        </div>
                    </div>
                </div>
                <div className='ab-exp-wrapper'>
                    <div className='ab-exp-info'>
                        <div className='ab-details-title'>
                            <h2>2016 - 2017</h2>
                        </div>
                        <div className='ab-details-p'>
                            <h2>Collagen Matrix · Oakland, NJ</h2>
                            <span>Integration Technician</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default About