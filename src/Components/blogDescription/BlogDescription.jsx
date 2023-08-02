
import './blogDesc.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { useCon } from '../context/CreateContext'

const BlogDescription = () => {
  
  const dispatch=useDispatch()
    const{setEdit,titleData,setTitle,desc,setDisc,editId,setEditId,time,setTime}=useCon()
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
    const galleryData1=useSelector((state)=>{
      return state.galleryReducer.data
    })
    const images1=[]
    galleryData1.forEach((ele)=>{
      images1.push(ele.urls.regular)
    })
    
 
  return (
    <div className='blogDescriptionx'>
       
      {
        (val.length>0) ? (val.map((ele)=>{
            return(
                <div className="blog">
                <div className="blogViewContainer">
    
                </div>
                <div className="blogImageConainer">
                    <img src={images1[Math.floor(Math.random()*images1.length)]} className='blogImageX' alt='blog'/>
                </div>
                <div className="blogDescriptionContainer">
                        <div className="textContainer">
                            <h2 className='blogtitlex'>{ele.title}</h2>
                            <p className='blogdescx'>{ele.description}</p>
                            <div>

                            <button className='homebut' onClick={()=>{
                                navigate("/")
                            }}>Go to Home</button>
                            <button className='homebut' style={{margin:'5px'}} onClick={()=>{
                              setEdit(true)
                           

                              setTitle(ele.title)
                              setDisc(ele.description)
                              setEditId(ele.id)
                              setTime(ele.month)
                              navigate('/createcomp')
                              
                            }}>Edit</button>
                            </div>
                        </div>
                </div>
            </div>
            )
        })) : (<h1 className='loader'>...Loading !</h1>)
      }

    </div>
  )
}

export default BlogDescription