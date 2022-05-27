import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    const openSite = (site) => {
        return site === 'linkedin' ? window.open('https://www.linkedin.com/in/daviddwoo/') : window.open('https://github.com/daviddwoo')
    }

    return (
        <div className='outer-nb'>
            <ul className='outer-nb-list'>
                <li className='outer-nb-icon'> 
                    <LinkedInIcon 
                        onClick={() => openSite('linkedin')} 
                        sx={{
                            '&:hover': {
                                color: '#0A66C2',
                            },
                            transition: 'all 0.5s ease'
                        }} 
                        fontSize='small'
                    />
                </li>
                <li className='outer-nb-icon'> 
                    <GitHubIcon 
                        onClick={() => openSite('github')} 
                        sx={{
                            '&:hover': {
                                color: '#AD5C51',
                            },
                            transition: 'all 0.5s ease'
                        }} 
                        fontSize='small'
                    />
                </li>
                <li>
                    <hr 
                        style={{
                            color: 'black', 
                            width:'70px', 
                            border: '0.5px solid black'
                        }}
                    />
                </li>
                <li>
                    <span>CONNECT</span>
                </li>
            </ul>
        </div>
    )
}

export default Footer