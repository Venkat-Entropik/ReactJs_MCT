import React from 'react'
import './createblog.css'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { BloData, EditBlog, } from '../../redux/action'
import { useNavigate } from 'react-router-dom'
import { useCon } from '../context/CreateContext'


const CreateBlogComp = () => {
    const{edit,titleData,setTitle,desc,setDisc,editId,setEditId,time,setEdit}=useCon()
    const naigate=useNavigate()
    const dispatch=useDispatch()
    
    const[validate,setValidate]=useState(true)
    
    
    const newBlog={
        id: new Date().getTime().toString(),
        title:titleData,
        description:desc,
        month:time.toString()
    }
   const validation=()=>{
    if(titleData !== '' && desc !==''){
         
        dispatch(BloData(newBlog))
        setTitle('')
        setDisc('')
        naigate('/')
    }
    else{
        alert("All fields are required")
        return
    }
   }
  return (
    <div className='createBlog'>
        <div className="createBlogConainer">
            <h1 className='createtitle'>Create a new Blog</h1>
            <input type='text' placeholder='Title' value={titleData} className='createCompTitle' onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
            <textarea className='textArea' value={desc} placeholder='Enter Subject' rows="4" cols="50" onChange={(e)=>{
                setDisc(e.target.value)
            }}></textarea>
            {
                edit ? (<button className='createBlogbut' onClick={()=>{
                   
                      dispatch(EditBlog({
                                id:editId,
                                title:titleData,
                                description:desc,
                                time:time
                            }))
                    setDisc('')
                    setTitle('')
                    setEditId('')
                    setEdit(false)
                    naigate('/')
                    
                    
                 }}>Edit Post</button>) : (<button className='createBlogbut' onClick={()=>{
                    
                    validation()
                     
                 }}>Add Post</button>)
            }
        </div>
    </div>
  )
}

export default CreateBlogComp