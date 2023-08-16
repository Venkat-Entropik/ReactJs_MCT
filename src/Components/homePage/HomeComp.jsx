import React from 'react'
import './homecomp.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCon } from '../context/CreateContext'
const HomeComp = () => {
  const{user}=useCon()
  const navigate=useNavigate()
  const selector=useSelector((state)=>{
    return state.blogDataReducer
  })
  

const galleryData=useSelector((state)=>{
  return state.galleryReducer.data
})
const images=[]
galleryData.forEach((ele)=>{
  images.push(ele.urls.regular)
})
  return (
    <div className='homeComp'>

     {
       (selector.length===0) ? (<div className="homeCard">
       <div className="buttonContainer">
         
         <button className='createBlogBu' onClick={()=>{
           navigate("createcomp")
         }}>
         <i class="fa-solid fa-plus"></i>
         </button>
        
        
         <h3 style={{
           marginTop:"25px",
           color:"blueviolet"
         }}>Create new Blog</h3>
       </div>
       
     </div> ) :  (

        
          selector.map((ele)=>{
            return(
              <>
              <Link to={`${ele.id}`}>
                 <div className="homeCard">
                <div className="blogImageContainer">
                  <img src={images[Math.floor(Math.random()*images.length)]} alt='blogImage' className='blogImage'/>
                  <div className="userLogoContainer">
                  <img src={user?.photoURL} alt='userLogo' className='userLogo'/>

                  </div>
                </div>
                <div className="bottomContainer">
                <h3 className='titleofBlog'>{ele.title}</h3>
                <p className='blogDescription'>{ele.description.substring(0,100)}</p>
                <div className="userNameXXX gap">
                <i class="fa-solid fa-user"></i>
                  <p>{user?.displayName || user?.email}</p>
                </div>
                <div className="userNameXXX">
                <i class="fa-solid fa-calendar-days"></i>
                  <p>{ele.month.substring(0,15)}</p>
                </div>
                </div>
            </div>
           
            </Link>
              </>
            )
       
          })
        
     
    )
    
     } 

     {
      (selector.length>0) ? ( <>
        <div className="homeCard">
             <div className="buttonContainer">
               
               <button className='createBlogBu' onClick={()=>{
                 navigate("createcomp")
               }}>
               <i class="fa-solid fa-plus"></i>
               </button>
              
              
               <h3 style={{
                 marginTop:"25px",
                 color:"blueviolet"
               }}>Create new Blog</h3>
             </div>
             
           </div> 
        </> ) : null
     }
        
      
    </div>
  )
}

export default HomeComp