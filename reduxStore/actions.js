
import {Types} from './actionsTypes'
export const addAction=(description,title)=>({
    type:Types.Add_Todo,
    payload:{
        title,
        description,
    }
})

export const deleteAction=(id)=>({
    type:Types.Delete_Todo,
    payload:{
        id,

    }
})
