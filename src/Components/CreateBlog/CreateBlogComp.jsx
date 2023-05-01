import React from 'react'
import './createblog.css'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { BloData } from '../../redux/action'
import { useNavigate } from 'react-router-dom'
const CreateBlogComp = () => {
    const naigate=useNavigate()
    const dispatch=useDispatch()
    const[titleData,setTitle]=useState("")
    const[desc,setDisc]=useState("")
    const[time,setTime]=useState(new Date())
    const newBlog={
        id: new Date().getTime().toString(),
        title:titleData,
        description:desc,
        month:time.toString()
    }
    
  return (
    <div className='createBlog'>
        <div className="createBlogConainer">
            <h1 className='createtitle'>Create a new Blog</h1>
            <input type='text' placeholder='Title' className='createCompTitle' onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <textarea className='textArea' placeholder='Enter Subject' rows="4" cols="50" onChange={(e)=>{
                setDisc(e.target.value)
            }}></textarea>
            <button className='createBlogbut' onClick={()=>{
                dispatch(BloData(newBlog))
                naigate('/')
            }}>Add Post</button>
        </div>
    </div>
  )
}

export default CreateBlogComp