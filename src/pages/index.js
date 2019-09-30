import React ,{useEffect}from 'react'
function Index(){
    useEffect(()=>{
        console.log('index 页面')
        return ()=>{
            console.log('离开index页面')
        }
    },[])
    return (<div>index 页面</div>)
}
export default Index