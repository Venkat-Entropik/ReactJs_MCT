import React, { useEffect } from 'react'
import './blogDesc.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
const BlogDescription = () => {
 const[title,setTitle]=useState("")
    const navigate=useNavigate()
    const{id}=useParams()
    const selector=useSelector((state)=>{
        return state.blogDataReducer
      })
    const val=[]

    selector.filter((element)=>{
        return element.id === id ? (val.push(element)) : null
    })
    console.log("val",val)
      
    
 
  return (
    <div className='blogDescriptionx'>
       
      {
        (val.length>0) ? (val.map((ele)=>{
            return(
                <div className="blog">
                <div className="blogViewContainer">
    
                </div>
                <div className="blogImageConainer">
                    <img src='https://www.skuvault.com/wp-content/uploads/2022/07/iStock-1355902675.jpg' className='blogImageX' alt='blog'/>
                </div>
                <div className="blogDescriptionContainer">
                        <div className="textContainer">
                            <h2 className='blogtitlex'>{ele.title}</h2>
                            <p className='blogdescx'>{ele.description}</p>
                            <button className='homebut' onClick={()=>{
                                navigate("/")
                            }}>Go to Home</button>
                        </div>
                </div>
            </div>
            )
        })) : (<h1>...Loading !</h1>)
      }

    </div>
  )
}

export default BlogDescription