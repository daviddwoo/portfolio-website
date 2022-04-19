import React from 'react'
import './Project1.css'
import projImg1 from '../podify-hp.png'

const Project2 = () => {
    return (
        <div className='p1'>
            <div className='p1-img-wrapper'>
                <h1>Podify</h1>
                <h3>Capstone Project</h3>
                <img alt='' src={projImg1} className='proj-img'/>
                <div className='p1-info'>
                    <div className='p1-info-wrapper'>
                        <div className='p1-info-role'>
                            <span>Role</span>
                            <h4>Developer</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Date</span>
                            <h4>Mar - Apr 2022</h4>
                        </div>
                        <div>
                            <span>Technologies</span>
                            <h4>Javascript, React/Redux, Express, Sequelize, PostgreSQL, Spotify API</h4>
                        </div>
                    </div>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                        velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                    </p>
                    <hr className='p1-hr'/>

                    <div className='p1-contr'>
                        <span>Contributions</span>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                        </p>
                    </div>
                </div>
                {/* <hr className='p1-hr'/> */}
            </div>
            
        </div>
    )
}

export default Project2