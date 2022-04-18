import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    const openSite = (site) => {
        return site === 'linkedin' ? window.open('https://www.linkedin.com/in/daviddwoo/') : window.open('https://github.com/daviddwoo')
    }

    return (
        <div className='ft'>
            <hr className='ft-hr'/>
            <div className='ft-info'>
                <div className='ft-cr'>&copy; Copyright | David Woo | All rights reserved</div>
                <div className='ft-icons'>
                    <LinkedInIcon onClick={() => openSite('linkedin')} sx={{cursor: 'pointer'}} fontSize='large'/>
                    <GitHubIcon onClick={() => openSite('github')} sx={{cursor: 'pointer'}} fontSize='large'/>                
                </div>
            </div>
        </div>
    )
}

export default Footer