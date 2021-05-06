import React from 'react'
import { NavLink } from 'react-router-dom'
import SocialNetwork from './SocialNetwork'

const Navbar = () => {
  return (
    <nav>
      <ul className='liste'>
        <NavLink to='/'>
          <h1 className='logo'>Studio Muñoz</h1>
        </NavLink>
        <SocialNetwork />
        <NavLink to='/'><li className='items'>Home</li></NavLink>
        <NavLink to='/project-1'><li className='items-project'>Index
          <ul className='nav-projects'>
            <NavLink to='/projet-1' activeClassName='nav-active' className='hover'>
              <li>projet 1</li>
            </NavLink>
            <NavLink to='/projet-2' activeClassName='nav-active' className='hover'>
              <li>projet 2</li>
            </NavLink>
            <NavLink to='/projet-3' activeClassName='nav-active' className='hover'>
              <li>projet 3</li>
            </NavLink>
            <NavLink to='/projet-4' activeClassName='nav-active' className='hover'>
              <li>projet 4</li>
            </NavLink>
          </ul>                  </li>
        </NavLink>
        <NavLink to='/about'><li className='items'>About</li></NavLink>
        <NavLink to='/contact'><li className='items'>Contact</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
