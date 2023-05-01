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