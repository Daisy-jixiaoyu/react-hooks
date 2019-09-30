import React ,{useContext} from 'react'
import {CountContent} from './example'
function Counter(){
    const count = useContext(CountContent)
    return (<div>count 组件：{count}</div>)
}
export default Counter