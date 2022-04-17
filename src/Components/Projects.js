import React from 'react'
import './Projects.css'
import Project1 from '../unplgd.jpg'
import Project2 from '../podify.png'
import Project3 from '../proj3.jpg'

const Projects = () => {
    return (
        <div className='pj'>
            <div className='pj-title'>
                <h3>Current Projects</h3>
            </div>
            <div className='pj-wrapper'>
                <div className='pj-img-wrapper'>
                    <img className='pj-img' alt='' src={Project1}/>
                    <img className='pj-img' alt='' src={Project2}/>
                    {/* <img className='pj-img' alt='' src={Project3}/> */}
                </div>
                <div className='pj-img-right'>
                    <img className='pj-img-tall' alt='' src={Project3}/>
                </div>
            </div>
        </div>
    )
}

export default Projects