import React, { useRef } from 'react';

function App(){
    const inputFul = useRef(null)
    const btnClick = ()=>{
        inputFul.current.value = 'init value'
        console.log(inputFul,'inputFul')
    }
    return (
        <div>
            <input ref={inputFul} type="text"/>
            <button onClick={btnClick}>anniu</button>
        </div>
    )
}


export default App