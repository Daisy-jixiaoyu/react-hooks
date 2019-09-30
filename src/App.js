import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Index from './pages/index'
import List from './pages/list'

function App(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    
  })
  
  return(
    <div>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>按钮</button>

        <Router>
          <Link to="/" >index</Link>
          <Link to="/list/">list</Link>
          <Route path="/" exact component={Index}></Route>
          <Route path="/list" component={List}></Route>
        </Router>
    </div>
  )
}


export default App;
