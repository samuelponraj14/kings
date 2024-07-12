import React from 'react'
import './Practice.css'
import {video} from './Datalinks'

const Practice = () => {
  return (
    <div className="video-container">
            <video autoPlay muted loop id="video-bg">
                <source src={process.env.PUBLIC_URL + '/kings-video.mp4'}  type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                {/* Your other content goes here */}
                <h1>Your Title</h1>
                <p>Your description</p>
            </div>
        </div>
  )
}

export default Practice