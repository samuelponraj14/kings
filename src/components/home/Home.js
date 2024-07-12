import React from 'react'
import home_bg_image from "../../assets/kings1.jpg";
import './Home.css';

const Home = () => {
  return (
    <div id='home' className='home'>
        <img src={home_bg_image} alt='home_bg_image'></img>
    </div>
  )
}

export default Home