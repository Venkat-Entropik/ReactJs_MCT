const userData={
    userDetails:[]
}
export const userDataReducer=(state=userData,{type,data})=>{
    switch (type) {
        case "USERDATA":
            
            return{...state,userDetails:data}
    
        default:
            return state;
    }
}

const allBlogData=[

]
   


export const blogDataReducer=(state=allBlogData,{type,data})=>{
    switch (type) {
        case "BLOGDATA":
            
            return[...state,data]
    
        default:
            return state;
    }
}