import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import { useLocation, useNavigate } from 'react-router-dom'
import projImg1 from '../gs-hp.png'
import projImg2 from '../podify-hp.png'
import projImg3 from '../Conductor.png'
import { motion } from 'framer-motion'

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  };

const Portfolio = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const navigate = useNavigate();

    const [hoverState1, setHoverState1] = useState(false);
    const [hoverState2, setHoverState2] = useState(false);
    const [hoverState3, setHoverState3] = useState(false);

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
            <div className='pf-wrapper'>
                <div className='pf-proj'>
                    <motion.div className='pf-proj-name' onClick={() => navigate('/unplgd')} onHoverStart={() => setHoverState1(true)} onHoverEnd={() => setHoverState1(false)}>
                        {/* <img className='pf-img' src={projImg1} alt=''/> */}

                        <h1>UNPLGD</h1>
                        <span>Fullstack e-commerce application</span>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        className='float-img'
                        animate={{
                            opacity: hoverState1 ? 1 : 0,
                            x: -323,
                            y: -220
                        }}
                        transition={{
                            ease: 'linear'
                        }}
                    >
                        <img className='pf-img' src={projImg1} alt=''/>
                    </motion.div>
                </div>
                <div className='pf-proj'>
                    <motion.div className='pf-proj-name' onClick={() => navigate('/podify') } onHoverStart={() => setHoverState2(true)} onHoverEnd={() => setHoverState2(false)}>
                        <h1>Podify</h1>
                        <span>Capstone Project</span>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        className='float-img'
                        animate={{
                            opacity: hoverState2 ? 1 : 0,
                            x: -320,
                            y: -220
                        }}
                        transition={{
                            ease: 'linear'
                        }}
                    >
                        <img className='pf-img' src={projImg2} alt=''/>
                    </motion.div>
                </div>
                <div className='pf-proj-last'>
                    <motion.div className='pf-proj-name' onClick={() => navigate('/conductor')} onHoverStart={() => setHoverState3(true)} onHoverEnd={() => setHoverState3(false)}>
                        <h1>Conductor</h1>
                        <span>Solo Project</span>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0}}
                        className='float-img'
                        animate={{
                            opacity: hoverState3 ? 1 : 0,
                            x: -320,
                            y: -220
                        }}
                        transition={{
                            ease: 'linear'
                        }}
                    >
                        <img className='pf-img' src={projImg3} alt=''/>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Portfolio