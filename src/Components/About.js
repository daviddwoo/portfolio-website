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
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 

                        </p>
                        <p>
                            Ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                        </p>
                        <p>
                            Ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                        </p>
                    </div>
                </div>
            </div>
            <div>
                Experience
            </div>
        </div>
    )
}

export default About