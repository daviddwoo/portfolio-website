import React, { useEffect } from 'react'
import './Projects.css'
import Project1 from '../unplgd.jpg'
import Project2 from '../podify.png'
import Project3 from '../proj3.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Projects = ({ projRef }) => {
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) elem.scrollIntoView({behavior: "smooth"});
        } 
    }, [location])

    return (
        <div id='projects'>
            <div className='pj-container'>
                <div className='pj-wrapper'>
                    <div className='pj-title'>
                        <h2>Current Portfolio</h2>
                    </div>
                    <div className='pj-cards'>
                        <div className='pj-img-wrapper'>
                            <div className='pj-info' onClick={() => navigate('/unplgd')}>
                                <img className='pj-img' alt='' src={Project1}/>
                                <div className='pj-title-wrapper'> 
                                    <div className='pj-info-title'>
                                        <button className='btn-title'>UNPLGD <ArrowRightAltIcon className='arrowIcon' fontSize='large'/></button>
                                        {/* <h4>UNPLGD</h4> */}
                             
                                    </div>
                                    <span>Fullstack e-commerce application</span>
                                </div>
                            </div>
                            <div className='pj-info' onClick={() => navigate('/podify')}>
                                <img className='pj-img' alt='' src={Project2}/>
                                <div className='pj-title-wrapper'> 
                                    <div className='pj-info-title'>
                                        <button className='btn-title'>Podify <ArrowRightAltIcon className='arrowIcon' fontSize='large'/></button>

                                        {/* <h4>Podify</h4>
                                        <ArrowRightAltIcon className='arrowIcon' fontSize='large'/> */}
                                    </div>
                                    <span>Capstone Project</span>
                                </div>
                            </div>
                        </div>
                        <div className='pj-info'>
                            <div className='pj-info-tall' onClick={() => navigate('/conductor')}>
                                <div className='pj-title-wrapper-tall'> 
                                    <img className='pj-img-tall' alt='' src={Project3}/>
                                    <div className='pj-info-title'>
                                        <button className='btn-title'>Conductor <ArrowRightAltIcon className='arrowIcon' fontSize='large'/></button>

                                        {/* <h4>Conductor</h4>
                                        <ArrowRightAltIcon className='arrowIcon' fontSize='large'/> */}
                                    </div>
                                    <span>Solo Project</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects