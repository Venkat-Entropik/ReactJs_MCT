import React from 'react'
import './loginpage.css'
import loginImage from '../ImagesContainer/loginImage.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { userDetails } from '../../redux/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
const[userName,getUserName]=useState("")
const[share,ShareUserName]=useState(null);
const[inpuser,setInpuser]=useState("")
const[pass,setPass]=useState("")

const dispatch=useDispatch()
async function fetchUserDetails(){
    const streamResponse=await fetch(`https://api.github.com/users/${share}`)
    const textResponse=await streamResponse.text()
    const jsonData=JSON.parse(textResponse)
    dispatch(userDetails(jsonData))
}
const navigate=useNavigate()
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
                <input type='email' placeholder='Your Email' className='Email' onChange={(e)=>{
                    setInpuser(e.target.value)
                }}/>
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="user">
                <input type='password' placeholder='Your Password' className='Password' onChange={(e)=>{
                    setPass(e.target.value)
                }}/>
                <i class="fa-solid fa-key"></i>
                </div>
                
               
                <button className='but' onClick={()=>{
                    ShareUserName(userName)
                    setTimeout(()=>{
                        if(inpuser==='admin@gmail.com' && pass==='admin@123'){
                            localStorage.setItem("loginsuccess",true)
                            navigate("/")
                           
                        }
                        else{
                            alert("Wrong Credintials")
                        }
                    },500)
                }}>Login</button>
                 <p className='note'>Note:Enter your Github user Name</p>
                 <p className='note1'>Email:admin@gmail.com</p>
                 <p className='note1'>password:admin@123</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default LoginPage