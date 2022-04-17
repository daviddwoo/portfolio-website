import React from 'react'
import './Projects.css'
import Project1 from '../unplgd.jpg'
import Project2 from '../podify.png'
import Project3 from '../proj3.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Projects = () => {
    return (
        <div className='pj'>
            <div className='pj-title'>
                <h3>Current Portfolio</h3>
            </div>
            <div className='pj-wrapper'>
                <div className='pj-img-wrapper'>
                    <div className='pj-info'>
                        <img className='pj-img' alt='' src={Project1}/>
                        <div className='pj-info-title'>
                            <h4>UNPLGD</h4>
                            <ArrowRightAltIcon className='arrowIcon' fontSize='large'/>
                        </div>
                        <span>Fullstack e-commerce application</span>
                    </div>
                    <div className='pj-info'>
                        <img className='pj-img' alt='' src={Project2}/>
                        <div className='pj-info-title'>
                            <h4>Podify</h4>
                            <ArrowRightAltIcon className='arrowIcon' fontSize='large'/>
                        </div>
                        <span>Capstone Project</span>
                    </div>
                </div>
                <div className='pj-info'>
                    <div>
                        <img className='pj-img-tall' alt='' src={Project3}/>
                        <div className='pj-info-title'>
                            <h4>Conductor</h4>
                            <ArrowRightAltIcon className='arrowIcon' fontSize='large'/>
                        </div>
                        <span>Solo Project</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects