import React from 'react'
import './loginpage.css'
import loginImage from '../ImagesContainer/loginImage.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { userDetails } from '../../redux/action'
import { useDispatch } from 'react-redux'
const LoginPage = () => {
const[userName,getUserName]=useState("")
const[share,ShareUserName]=useState(null);
const dispatch=useDispatch()
async function fetchUserDetails(){
    const streamResponse=await fetch(`https://api.github.com/users/${share}`)
    const textResponse=await streamResponse.text()
    const jsonData=JSON.parse(textResponse)
    dispatch(userDetails(jsonData))
}

useEffect(() => {
 fetchUserDetails()
}, [share])


  return (
    <div className='loginPage'>
        <div className="loginContainer">
            <div className="leftContainer">
                <img src={loginImage} alt='login' className='loginImage'/>
            </div>
            <div className="rightContainer">
                <div className="inputContainer">
                <h2 className='logintitle'>Log In</h2>
                <div className="user">
                <input type='text' placeholder='Username' className='userName' onChange={(e)=>{
                    getUserName(e.target.value)
                }}/>
                <i class="fa-solid fa-user"></i>
                </div>
                <div className="user">
                <input type='email' placeholder='Your Email' className='Email'/>
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="user">
                <input type='password' placeholder='Your Password' className='Password'/>
                <i class="fa-solid fa-key"></i>
                </div>
                
               
                <button className='but' onClick={()=>{
                    ShareUserName(userName)
                }}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage