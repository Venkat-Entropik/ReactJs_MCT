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
const[share,ShareUserName]=useState("");
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




const dataValidation=()=>{
    

         ShareUserName(userName)
        if(userName===''){
            alert('Enter Your GitHub User Name')
            return
        }
        else if(inpuser==='admin@gmail.com' && pass==='admin@123'){
            localStorage.setItem("loginsuccess",true)
            // navigate("/")
            setTimeout(()=>{
                navigate("/")
            },1000)
           
        }
        else{
            alert("Wrong Credintials")
        }
    
}


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
                <input type='text' placeholder='GitHub User Name' className='userName' onChange={(e)=>{
                    getUserName(e.target.value)
                    
                }}/>
                <i class="fa-solid fa-user"></i>
                </div>
                <div className="user">
                <input type='email' placeholder='admin@gmail.com' className='Email' onChange={(e)=>{
                    setInpuser(e.target.value)
                }}/>
                <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="user">
                <input type='password' placeholder='admin@123' className='Password' onChange={(e)=>{
                    setPass(e.target.value)
                }}  />
                <i class="fa-solid fa-key"></i>
                </div>
                
               
                <button className='but' onClick={()=>{
                    dataValidation()
                }}>Login</button>
                 <p className='note text-danger'>Note:Enter your Github user Name</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default LoginPage