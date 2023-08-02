import React, { useEffect, useState } from 'react'

export default function UseEffectCleanupFunction() {
    const[widthCount,setWidthCount]=useState(window.screen.width);

   const actualWidth =() =>{
    console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
   }
    useEffect(()=>{
  window.addEventListener('resize',actualWidth);

  return()=>{
    console.log('remove event')
    window.removeEventListener('resize',actualWidth);
  }
    });
  return (
    <>
    <div className='App'>
        <p>The actual size of the window is:</p>
        <h1>{widthCount}</h1>
        </div>
    </>
  )
}
