import React,{useContext,createContext,useState} from 'react'
const GlobalContext=createContext()
const CreateContext = ({children}) => {
    const[titleData,setTitle]=useState("")
    const[desc,setDisc]=useState("")
    const[edit,setEdit]=useState(false)
    const[editId,setEditId]=useState('')
    const[time,setTime]=useState(new Date())

  return (
    <GlobalContext.Provider value={{edit,setEdit,titleData,setTitle,desc,setDisc,editId,setEditId,time,setTime}}>
        {children}
    </GlobalContext.Provider>
  )
}
export const useCon=()=>useContext(GlobalContext)
export default CreateContext
