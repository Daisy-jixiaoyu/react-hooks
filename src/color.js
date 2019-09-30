import React,{createContext,useReducer} from 'react'

export const ColorContext = createContext()
const reducer = (state,action)=>{
    switch(action.type){
        case 'update':
            return action.color
        default:
            return state    
    }
}

function Color(props){
    const [color,dispatch] = useReducer(reducer,'blue')
    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}


export default Color