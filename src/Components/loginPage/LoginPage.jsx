import React from 'react'
import './loginpage.css'
import loginImage from '../ImagesContainer/loginImage.png'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useCon } from '../context/CreateContext'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
const navigate=useNavigate()

const googleProvider=new GoogleAuthProvider()

const signInWithGoogle=()=>{
    signInWithPopup(auth,googleProvider).then((res)=>{
        navigate('/')
    }).catch((error)=>{
        console.log(error);
    })
}
  return (
    <div className='loginPage'>
        <div className="loginContainer">
            <div className="leftContainer">
                <img src={loginImage} alt='login' className='loginImage'/>
            </div>
            <div className="rightContainer">  
                <GoogleButton style={{
                    outline:'none',
                    borderRadius:3
                }}
                onClick={signInWithGoogle}
                />
            </div>
        </div>
    </div>
  )
}

export default LoginPage