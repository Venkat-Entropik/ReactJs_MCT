
const allBlogData=[

]
   
export const blogDataReducer=(state=allBlogData,action)=>{
    switch (action.type) {
        case "BLOGDATA":
            
            return[...state,action.data]
        case "EDIT":
            return [...state.map((item)=>{
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