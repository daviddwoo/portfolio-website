import React from 'react'
import './Projects.css'
import Project1 from '../unplgd.jpg'
import Project2 from '../podify.png'

const Projects = () => {
    return (
        <div className='pj'>
            <div className='pj-wrapper'>
                <div className='pj-container'>
                    <div className='pj-title'>
                        <h2>Current Projects</h2>
                    </div>
                    <div className='pj-img-wrapper'>
                        <img className='pj-img' alt='' src={Project1}/>
                        <img className='pj-img' alt='' src={Project2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects