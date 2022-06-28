import React, { useEffect } from 'react'
import './Portfolio.css'
import { useNavigate } from 'react-router-dom'
import projImg1 from '../../Screenshots/gs-hp2.webp'
import projImg2 from '../../Screenshots/podify2.webp'
import projImg3 from '../../Screenshots/Conductor2.webp'
import { motion } from 'framer-motion'

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const navigate = useNavigate();

    return (
        <motion.div 
            className='pf' 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 0.3, duration: 0.5}}}
            exit={{opacity: 0}}
        >
            <div 
                className='pf-wrapper'
                initial='initial'
                animate='animate'
            >
                <div className='pf-proj1'>
                    <div 
                        className='pf-proj-name' 
                        onClick={() => navigate('/unplgd')} 
                    >
                        <h1>UNPLGD</h1>
                        <span>e-commerce application</span>
                    </div>
                    <div 
                        className='pf-proj-cover' 
                        onClick={() => navigate('/unplgd')}
                    >
                        <img 
                            className='pf-img' 
                            width='610px'
                            height='300px' 
                            src={projImg1} 
                            alt='' 
                        />
                    </div>
                </div>
                <div className='pf-proj'>
                    <div 
                        className='pf-proj-name' 
                        onClick={() => navigate('/podify')} 
                    >
                        <h1>Podify</h1>
                        <span>Capstone Project</span>
                    </div>
                    <div 
                        className='pf-proj-cover' 
                        onClick={() => navigate('/podify')}
                    >
                        <img 
                            className='pf-img' 
                            width='610px'
                            height='300px'  
                            src={projImg2} 
                            alt='' 
                        />
                    </div>
                </div>
                <div className='pf-proj'>
                    <div 
                        className='pf-proj-name'
                        onClick={() => navigate('/conductor')}  
                    >
                        <h1>Conductor</h1>
                        <span>Solo Project</span>
                    </div>
                    <div 
                        className='pf-proj-cover' 
                        onClick={() => navigate('/conductor')}
                    >
                        <img 
                            className='pf-img' 
                            width='610px'
                            height='300px'  
                            src={projImg3} 
                            alt='' 
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Portfolio