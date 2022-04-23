import React, { useEffect } from 'react'
import './Projects.css'
import Project1 from '../unplgd.jpg'
import Project2 from '../podify.png'
import Project3 from '../proj3.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate, useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Projects = ({ projRef }) => {
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) elem.scrollIntoView({behavior: "smooth"});
        } 
        // else window.scrollTo({top:0,left:0, behavior: "smooth"})
    }, [location])

    return (
        <div id='projects' ref={projRef}> 
            <div className='pj-wrapper'>
                <div className='pj-cards'>
                    <div className='pj-img-wrapper'>
                        <h2>Current Portfolio</h2>
                        {/* <Link to='/unplgd'> */}
                        <div className='pj-info' onClick={() => navigate('/unplgd')}>
                            <img className='pj-img' alt='' src={Project1}/>
                            <div className='pj-title-wrapper'> 
                                <div className='pj-info-title'>
                                    <h4>UNPLGD</h4>
                                    <ArrowRightAltIcon className='arrowIcon' fontSize='large'/>
                                </div>
                                <span>Fullstack e-commerce application</span>
                            </div>
                        </div>
                        {/* </Link> */}
                        <div className='pj-info' onClick={() => navigate('/podify')}>
                            <img className='pj-img' alt='' src={Project2}/>
                            <div className='pj-title-wrapper'> 
                                <div className='pj-info-title'>
                                    <h4>Podify</h4>
                                    <ArrowRightAltIcon className='arrowIcon' fontSize='large'/>
                                </div>
                                <span>Capstone Project</span>
                            </div>
                        </div>
                    </div>
                    <div className='pj-info'>
                        <div className='pj-info-tall' onClick={() => navigate('/conductor')}>
                            <div className='pj-title-wrapper'> 
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
            </div>
        </div>
    )
}

export default Projects