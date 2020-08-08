import {Types} from './actionsTypes'
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';

var defaultTodo=[{id:'34567876',
title:'new',
description:'new new',}]
const reducer=(state=[],action)=>{
    let newState;
    switch(action.type)
    {
        case Types.Add_Todo:
            newState=[...state]
            newState.push({
                id:uuidv4(),
                title:action.payload.title,
                description:action.payload.description,
            })
            return newState
            break;
        case Types.Delete_Todo:
           return state.filter((item)=>item.id!==action.payload.id)
            break;
        default:
            return state;


    }
  


}

export default reducer;