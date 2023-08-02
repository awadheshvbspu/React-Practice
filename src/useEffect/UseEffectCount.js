import React, { useEffect, useState } from 'react'

export default function UseEffectCount() {
    const [count,setCount]= useState(0);
    useEffect(()=>{
        if(count>=1){
    document.title=`Chats (${count})`
        } else{
  document.title=`Chats`
        }
    },[count]);
    console.log('hello')
  return (
    <>
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    </>
  )
}




