import { onAuthStateChanged } from 'firebase/auth'
import React,{useContext,createContext,useState, useEffect} from 'react'
import { auth } from '../../firebase/firebase'
const GlobalContext=createContext()
const CreateContext = ({children}) => {
    const[titleData,setTitle]=useState("")
    const[desc,setDisc]=useState("")
    const[edit,setEdit]=useState(false)
    const[editId,setEditId]=useState('')
    const[time,setTime]=useState(new Date())
    const[user,setUser]=useState(null)
   
    useEffect(()=>{
      onAuthStateChanged(auth,user=>{
          if(user) setUser(user)
          else setUser(null)
      })
  },[])

  return (
    <GlobalContext.Provider value={{edit,setEdit,titleData,setTitle,desc,setDisc,editId,setEditId,time,setTime,user,setUser}}>
        {children}
    </GlobalContext.Provider>
  )
}
export const useCon=()=>useContext(GlobalContext)
export default CreateContext
