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
   


export const blogDataReducer=(state=allBlogData,action)=>{
    switch (action.type) {
        case "BLOGDATA":
            
            return[...state,action.data]
        case "EDIT":
            return [...state.map((item)=>{
                // console.log("item",item);
                // console.log('id',item.id);
                // console.log('newId',item.id);
                return item.id === action.data.id ? {...item,title:action.data.title,description:action.data.description} : item
            })]
        default:
            return state;
    }
}
const galleryData={
    data:[]
}
export const galleryReducer=(state=galleryData,{type,data})=>{
    switch (type) {
        case "GALLARY":
            
        return{...state,data:data}
    
        default:
           return state
    }
}