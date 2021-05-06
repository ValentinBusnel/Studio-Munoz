import React, { useState } from 'react'
import { projectsData } from '../data/projectsData'
import { NavLink } from 'react-router-dom'

const Project = (props) => {
  const [currentProject] = useState(projectsData)
  // eslint-disable-next-line
  const project = currentProject[props.projectNumber]

  return (    
    <div className='project-main'>
      <div className='project-content'>
        <h1>{project.title}</h1>
        <p>{project.date}</p>
      </div>
      <div className='img-content'>
        <div className='img-container hover'>
          <span>
            <p>{project.infos}</p>
          </span>
          <img src={project.img} alt={project.title} className='img' />
        </div>
        <div className='button-container'>
        <NavLink  to={project.link} id='yesplz'><span className='button'>Take a look</span></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Project
