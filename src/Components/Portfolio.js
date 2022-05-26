import React, { useEffect } from 'react'
import './Portfolio.css'
import { useNavigate } from 'react-router-dom'
import projImg1 from '../gs-hp.png'
import projImg2 from '../podify-hp.png'
import projImg3 from '../Conductor.png'
import { motion } from 'framer-motion'


const para = {
    initial: {
      opacity: 0,  
      y: 40,
      color: "#000",
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1}
    },
    animate: {
      opacity: 1,
      y: 0,
      color: "#000",
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1.5}
    }
};

const container = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
};

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
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
                variants={container}
            >
                <motion.div variants={para} className='pf-proj1'>
                    <div 
                        className='pf-proj-name' 
                        onClick={() => navigate('/unplgd')} 

                    >
                        <h1>UNPLGD</h1>
                        <span>e-commerce application</span>
                    </div>
                    <div className='pf-proj-cover' onClick={() => navigate('/unplgd')}>
                        <img className='pf-img' src={projImg1} alt=''/>
                    </div>
                </motion.div>
                <motion.div variants={para} className='pf-proj'>
                    <div 
                        className='pf-proj-name' 
                        onClick={() => navigate('/podify')} 
                    >
                        <h1>Podify</h1>
                        <span>Capstone Project</span>
                    </div>
                    <div className='pf-proj-cover' onClick={() => navigate('/podify')} >
                        <img className='pf-img' src={projImg2} alt=''/>
                    </div>
                </motion.div>
                <motion.div variants={para} className='pf-proj'>
                    <div 
                        className='pf-proj-name'
                        onClick={() => navigate('/conductor')}  
                    >
                        <h1>Conductor</h1>
                        <span>Solo Project</span>
                    </div>
                    <div className='pf-proj-cover' onClick={() => navigate('/conductor')} >
                        <img className='pf-img' src={projImg3} alt=''/>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Portfolio