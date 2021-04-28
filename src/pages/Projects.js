import React from 'react'
import Navbar from '../components/Navbar'
import ButtonsBottom from '../components/ButtonsBottom'
import Project from '../components/Project'

export const Project1 = () => {
  return (
    <div className='pagefull'>

      <div className='project'>
        <div className='project'>
          <Navbar />
          <Project projectNumber={1} />
          <ButtonsBottom left='/' right='about' />
        </div>
        <div className='project'>
          <Project projectNumber={0} />
        </div>
        <div className='project'>
          <Project projectNumber={2} />
        </div>
        <div className='project'>
          <Project projectNumber={3} />
        </div>
        <div className='project'>
          <Project projectNumber={4} />
        </div>
        <div className='project'>
          <Project projectNumber={5} />
        </div>
        <div className='project'>
          <Project projectNumber={6} />
        </div>
        <div className='project'>
          <Project projectNumber={7} />
        </div>
        <div className='project'>
          <Project projectNumber={8} />
        </div>
        <div className='project'>
          <Project projectNumber={9} />
        </div>
      </div>
    </div>
  )
}
