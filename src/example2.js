import React, { useReducer } from 'react';
function App() {
    const [count, dispatch] = useReducer((state,action)=>{
        switch (action){
            case 'add':
                return state+1 
            default:
                return state    
        }
    },0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{dispatch('add')} }>按钮</button>

        </div>
    )
}


export default App;