import React from 'react'
import './navComp.css'
import navLogo from '../ImagesContainer/logo.png'
import { useSelector } from 'react-redux'
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
                <li>Home</li>
                <li>Create Blog</li>
                <li>Read Blog</li>
                <li>Login</li>
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