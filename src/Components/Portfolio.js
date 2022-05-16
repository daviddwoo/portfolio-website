import React, { useState } from 'react'
import './Portfolio.css'
import { useNavigate } from 'react-router'
import projImg1 from '../gs-hp.png'
import projImg2 from '../podify-hp.png'
import projImg3 from '../Conductor.png'
import useMousePosition from './useMousePos'
import { motion } from 'framer-motion'

const Portfolio = () => {
    const navigate = useNavigate();

    const { x, y } = useMousePosition();

    const [hoverState1, setHoverState1] = useState(false);
    const [hoverState2, setHoverState2] = useState(false);
    const [hoverState3, setHoverState3] = useState(false);

    const [state, setState] = useState({
        top: 0,
        left: 0,
    })

    return (
        <div className='pf'>
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
        </div>
    )
}

export default Portfolio