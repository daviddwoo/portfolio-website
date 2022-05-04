import React from 'react'
import './Project1.css'
import './About.css'
import projImg1 from '../Conductor.png'
// import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactPlayer from 'react-player';

const Project3 = () => {

    // const openSite = (site) => {
    //     return site === 'live' ? window.open('https://graceshopper-unplgd.herokuapp.com/') : window.open('https://github.com/daviddwoo/unplgd')
    // }

    return (
        <div className='p1'>
            <div className='p1-img-wrapper'>
                <h1>Conductor</h1>
                <h3>Solo Project</h3>
                <img alt='' src={projImg1} className='proj-img'/>
                <div className='p1-info'>
                    <div className='p1-info-wrapper'>
                        <div className='p1-info-role'>
                            <span>Role</span>
                            <h4>Sole Developer</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Date</span>
                            <h4>Feb 2022</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Technologies</span>
                            <h4>Javascript, TensorFlow.js, Teachable Machine, Phaser3</h4>
                        </div>
                        <div className='p1-info-links'>
                            {/* <div className='p1-links' onClick={() => window.open('https://graceshopper-unplgd.herokuapp.com/')}>
                                <LinkIcon fontSize='large'/>
                                <h4>Deployed Link</h4>
                            </div> */}
                            <div className='p1-links' onClick={() => window.open('https://github.com/daviddwoo/conductor')}>
                                <GitHubIcon fontSize='large'/>
                                <h4>Github Repo</h4>
                            </div>
                        </div>
                    </div>
                    <div className='p1-contr'>
                        <span>Overview</span>
                        <p>
                            This was a solo project I built in a week span during the Flex program. I was fascinated by machine learning and decided to work with this technology to build Conductor. 
                        </p>
                        <p>
                            Conductor is a web based game where character movement is not controlled by the keyboard or mouse, but instead by hand motions in the webcam!
                        </p>
                        <p>
                            Please check out the screen demo of the game below!
                        </p>
                    </div>
                    <div className='player-wrapper-p3'>
                        <ReactPlayer 
                            url={'https://vimeo.com/705247868'} 
                            width='100%' 
                            height='100%'
                            className='react-player-p3' 
                        />
                    </div>
                    {/* <hr className='p1-hr'/> */}
                    <div className='p1-contr2'>
                        <span>Contributions</span>
                        <p>
                            Utilized Teachable Machine to train different image classification models based on TensorFlow.js technology.
                        </p>
                        <p>
                            Built the web game using the Phaser3 library.
                        </p>
                    </div>
                </div>
                {/* <hr className='p1-hr'/> */}
            </div>
            <hr className='ab-hr'/>
        </div>
    )
}

export default Project3