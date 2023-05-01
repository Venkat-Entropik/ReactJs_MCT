import React from 'react'
import './navComp.css'
import navLogo from '../ImagesContainer/logo.png'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const NavComp = () => {
    const selector=useSelector((state)=>{
        return state.userDataReducer.userDetails
    })
    console.log("selector",selector)
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
            <img src={selector.avatar_url} alt='NavUser' className='navUser'/>
            <h3 style={{color:"darkred"}}>{selector.login}</h3>
            </div>
        </div>
    </div>
  )
}

export default NavComp