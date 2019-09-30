import React,{useState,useCallback,useEffect} from 'react'
function useWiSize(){
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    });
    const onReise=useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onReise)
        return ()=>{
            window.removeEventListener('resize',onReise)
        }
    })

    return size
}

function App(){
    const size = useWiSize()
    return (
        <div>页面宽高{size.width}x{size.height}</div>
    )
}

export default App