import React from 'react'
import './navComp.css'
import navLogo from '../ImagesContainer/logo.png'

import { NavLink } from 'react-router-dom'
import avathar from '../ImagesContainer/pngwing.com.png'
import UserSidebar from '../loginPage/UserSidebar'
import { useCon } from '../context/CreateContext'
const NavComp = () => {
    const {user} =useCon()
  return (
    <div className='navComp'>
        <div className="navContainer">
            <img src={navLogo} alt='navLogo' className='navLogo'/>
            <ul>
                <NavLink to="/">
                <li>Home</li>
                </NavLink>
               <NavLink to="login">
               <li>Login</li>
               </NavLink>
                
            </ul>
            <div className="userOut">
              {
                 user? <UserSidebar/> : null
              }
            </div>
        </div>
    </div>
  )
}

export default NavComp