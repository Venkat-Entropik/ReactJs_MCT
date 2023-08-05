import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCon } from '../context/CreateContext'

const ProtectedRoute = ({Component}) => {
    const navigate=useNavigate()
    const{user}=useCon()
    useEffect(() => {
      
    if(!user){
       navigate('/login');
    }
     
    })
    
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoute