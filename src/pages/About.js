import React from 'react'
import Navbar from '../components/Navbar'
import ButtonsBottom from '../components/ButtonsBottom'

const About = () => {
  return (
    <div className='main'>
      <Navbar />
      <ButtonsBottom left='project-1' right='Contact' />
      <div className='about-main'>
      <div className='about'>
        <h1>About me</h1>
        <p>Been from a Venezuelan origin and in France for more than three years, I was able to discover a whole new country and acquire a dual culture. My experiences have brought me great personal enrichment and have led me to be much more autonomous and independent.
        <br /><br />I am a Master Design Student. I am interested in editorial, fashion, visual identity, and typography and would like to collaborate with photographers. I seek to explore new ways of pushing boundaries, always looking for the new, the daring, to create something iconic, unique, special.</p>
      </div>
      </div>
    </div>
  )
}

export default About
