import React from 'react'
import './Hero.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
    const particlesLoaded = (container) => {
    // console.log(container);
    };

    return (
        <div className='hp'>
            <Particles
                className='particles'
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": false,
                    },
                    "particles": {
                        "number": {
                        "value": 12,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                        },
                        "color": {
                        "value": "#191963"
                        },
                        "shape": {
                        "type": "circle",
                        "options": {
                            "sides": 5
                        }
                        },
                        "opacity": {
                        "value": 0.9,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 0.7,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                        },
                        "size": {
                            "value": 8,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 0.1,
                                "sync": true
                            }
                        },
                        "rotate": {
                            "value": 0,
                            "random": true,
                            "direction": "clockwise",
                            "animation": {
                                "enable": true,
                                "speed": 5,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 600,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 0.9,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                        "onhover": {
                            "enable": true,
                            "mode": [
                                "grab"
                            ]
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "resize": true
                        },
                        "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                            "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        "color": "black",
                    }
                }}
            />
            <div className='hp-wrapper'>
                <div>
                    <div className='hp-name'><h1>David Woo</h1></div>
                    <div className='hp-title1'><h1>Software Engineer</h1></div>
                    {/* <hr className='hr'/> */}
                    <div className='hp-title2'><h1>Fullstack Developer</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Hero