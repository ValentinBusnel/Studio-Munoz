import React from 'react'
import Navbar from '../components/Navbar'
import SocialNetwork from '../components/SocialNetwork'
import DynamicText from '../components/DynamicText'
import ButtonsBottom from '../components/ButtonsBottom'

const Home = () => {
  return (
    <div>
      <div className='home'>
        <Navbar />
        <SocialNetwork />
        <div className='home-main'>
          <div className='main-content'>
            <h1>Studio Munoz</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <ButtonsBottom right='/project-1' />
      </div>
    </div>
  )
}

export default Home
