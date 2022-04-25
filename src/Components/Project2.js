import React from 'react'
import './Project1.css'
import projImg1 from '../podify-hp.png'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReactPlayer from 'react-player';

const Project2 = () => {

    const openSite = (site) => {
        return site === 'live' ? window.open('https://podify-fsa.herokuapp.com/aboutUs') : window.open('https://github.com/daviddwoo/podify')
    }

    return (
        <div className='p1'>
            <div className='p1-img-wrapper'>
                <h1>Podify</h1>
                <h3>Capstone Project</h3>
                <img alt='' src={projImg1} className='proj-img'/>
                <div className='p1-info'>
                    <div className='p1-info-wrapper'>
                        <div className='p1-info-role'>
                            <span>Role</span>
                            <h4>Developer</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Date</span>
                            <h4>Mar - Apr 2022</h4>
                        </div>
                        <div className='p1-info-role'>
                            <span>Technologies</span>
                            <h4>Javascript, React/Redux, Express, Sequelize, PostgreSQL, Spotify API</h4>
                        </div>
                        <div className='p1-info-links'>
                            <div className='p1-links' onClick={() => openSite('live')}>
                                <LinkIcon fontSize='large'/>
                                <h4>Deployed Link</h4>
                            </div>
                            <div className='p1-links' onClick={() => openSite('gh')}>
                                <GitHubIcon fontSize='large'/>
                                <h4>Github Repo</h4>
                            </div>
                        </div>
                    </div>
                    <p>
                        This was my capstone project during the Flex program. I worked in a team of 4 developers to create Podify, a fullstack application where users can access, search,  
                        and add timestamps & comments for their favorite podcasts.
                    </p>
                    <p>
                        Users will login with their Spotify account and can have the capability of browsing through top podcasts, adding shows to their favorities, liking / disliking specific episodes and more.                         
                    </p>
                    <p>
                        Below is the video presentation of our project!
                    </p>
                    <hr className='p1-hr'/>
                    <div className='player-wrapper'>
                        <ReactPlayer 
                            url={'https://vimeo.com/701864385'} 
                            width='100%' 
                            height='100%'
                            className='react-player' 
                        />
                    </div>
                    <hr className='p1-hr'/>
                    <div className='p1-contr'>
                        <span>Contributions</span>
                        <p>
                            Helped implement Spotify OAuth login and integrated user access token into our database used for data retrieval from the Spotify API.
                        </p>
                        <p>
                            Developed Redux store and action creators / thunks for asynchronous calls to backend server used for CRUD functionality.
                        </p>
                        <p>
                            Created Single Podcast page with timestamp, comments & replies, and liking / disliking comments functionality. This was built using React functional components with hooks and Express API routes.  
                        </p>
                    </div>
                </div>
                {/* <hr className='p1-hr'/> */}
            </div>
            
        </div>
    )
}

export default Project2