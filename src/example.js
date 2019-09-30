import React, { useState, createContext} from 'react';
import Counter from './counter'
export const CountContent = createContext()
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>按钮</button>
            <CountContent.Provider value={count}>
                <Counter />
            </CountContent.Provider>

        </div>
    )
}


export default App;
