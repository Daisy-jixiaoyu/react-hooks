import React ,{useContext}from 'react'
import {ColorContext} from './color'
function Buttons(){
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{dispatch({type:'update',color:'black'});console.log('heise')}}>黑色</button>
            <button onClick={()=>{dispatch({type:'update',color:'red'})}}>红色</button>
        </div>
    )
}

export default Buttons