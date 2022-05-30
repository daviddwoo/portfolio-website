import React, { useEffect } from 'react'
import './Portfolio.css'
import { useNavigate } from 'react-router-dom'
import projImg1 from '../../Screenshots/gs-hp2.webp'
import projImg2 from '../../Screenshots/podify2.webp'
import projImg3 from '../../Screenshots/Conductor2.webp'
import { motion } from 'framer-motion'
import { animations, stagger1 } from '../../framer'

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const navigate = useNavigate();

    return (
        <motion.div 
            className='pf' 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <motion.div 
                className='pf-wrapper'
                initial='initial'
                animate='animate'
                variants={stagger1}
            >
                <motion.div 
                    className='pf-proj1'
                    variants={animations} 
                >
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
                </motion.div>
                <motion.div 
                    className='pf-proj'
                    variants={animations} 
                >
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
                </motion.div>
                <motion.div 
                    className='pf-proj'
                    variants={animations} 
                >
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
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Portfolio