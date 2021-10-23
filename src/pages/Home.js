import React from 'react'
import DynamicText from '../components/DynamicText'
import ButtonsBottom from '../components/ButtonsBottom'
import Navigation from '../components/Navigation'
import { Cursor } from '../components/Cursor'

const Home = () => {
  return (
    <div>
      <Cursor />
      <div className='home'>
        <Navigation />
        <div className='home-main'>
          <div className='main-content'>
            <h1>Studio Muñoz</h1>
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
