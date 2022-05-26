import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import { useLocation, useNavigate } from 'react-router-dom'
import projImg1 from '../gs-hp.png'
import projImg2 from '../podify-hp.png'
import projImg3 from '../Conductor.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
    // const { pathname } = useLocation();

    // const { ref, inView } = useInView();

    // const controls = useAnimation();
    // const [ref, inView] = useInView();
  
    // useEffect(() => {
    //   if (inView) {
    //     controls.start("visible");
    //   }
    // }, [controls, inView]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const navigate = useNavigate();

    // const [hoverState1, setHoverState1] = useState(false);
    // const [hoverState2, setHoverState2] = useState(false);
    // const [hoverState3, setHoverState3] = useState(false);

    // const [state, setState] = useState({
    //     top: 0,
    //     left: 0,
    // })

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