import React from 'react'
import './Project1.css'
import projImg1 from '../gs-hp.png'
// import projImg2 from '../podify.png'
// import projImg3 from '../proj3.jpg'

const Project1 = () => {

    return (
        <div className='p1'>
            <div className='p1-img-wrapper'>
                <h1>UNPLGD</h1>
                <h3>Fullstack e-commerce application</h3>
                <img alt='' src={projImg1} className='proj-img'/>
                <hr className='p1-hr'/>
                <div className='p1-info'>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                        velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project1