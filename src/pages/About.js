import React from 'react'
import Navbar from '../components/Navbar'
import ButtonsBottom from '../components/ButtonsBottom'

const About = () => {
  return (
    <div className='page_about'>
      <Navbar />
      <ButtonsBottom left='project-1' right='Contact' />
    <div className='container'>
      <h1 className='title_about'>Studio Munoz</h1>
      <h2 className='fonction'>UI / UX Designer and Developer</h2>
      <p className='description'>Been from a Venezuelan origin and in France for more than three years, I was able to discover a whole new country and acquire a dual culture. My experiences have brought me great personal enrichment and have led me to be much more autonomous and independent.
          <br/><br/>I am a Master Design Student. I am interested in editorial, fashion, visual identity, and typography and would like to collaborate with photographers. I seek to explore new ways of pushing boundaries, always looking for the new, the daring, to create something iconic, unique, special.
      </p>
    </div>
    </div>
  )
}

export default About

/**
 * 
 * <p>Been from a Venezuelan origin and in France for more than three years, I was able to discover a whole new country and acquire a dual culture. My experiences have brought me great personal enrichment and have led me to be much more autonomous and independent.
 * I am a Master Design Student. I am interested in editorial, fashion, visual identity, and typography and would like to collaborate with photographers. I seek to explore new ways of pushing boundaries, always looking for the new, the daring, to create something iconic, unique, special.
      <Navbar />
      <ButtonsBottom left='project-1' right='Contact' />
    */
