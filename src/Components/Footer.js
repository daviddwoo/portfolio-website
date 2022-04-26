import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Waves from '../waves.svg'

const Footer = () => {

    const openSite = (site) => {
        return site === 'linkedin' ? window.open('https://www.linkedin.com/in/daviddwoo/') : window.open('https://github.com/daviddwoo')
    }

    return (
        <div className='ft'>
            <div className='ft-hr'>
                <hr />
            </div>
            <div className='ft-wrapper'>
                <div className='ft-info'>
                    <div className='ft-cr'>&copy; 2022 | David Woo | All rights reserved</div>
                    <div className='ft-icons'>
                        <LinkedInIcon 
                            onClick={() => openSite('linkedin')} 
                            sx={{
                                cursor: 'pointer', 
                                '&:hover': {
                                    color: '#0A66C2',
                                },
                                transition: 'all 0.5s ease'
                            }} 
                            fontSize='large'
                        />
                        <GitHubIcon 
                            onClick={() => openSite('github')} 
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#AD5C51',
                                },
                                transition: 'all 0.5s ease'
                            }} 
                            fontSize='large'
                        />                
                    </div>
                </div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,213.3C672,213,768,139,864,101.3C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            <img alt='' src={Waves} className='waves'/>
        </div>
    )
}

export default Footer