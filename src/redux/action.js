export const userDetails=(userData)=>{
    return{
        type:'USERDATA',
        data:userData
    }
}

export const BloData=(data)=>{
    return{
        type:"BLOGDATA",
        data:data
    }
}

export const Gallary=(data)=>{
    return{
        type:"GALLARY",
        data:data
    }
}

export const EditBlog=(data)=>{
    return{
        type:"EDIT",
        data:data
    }
}