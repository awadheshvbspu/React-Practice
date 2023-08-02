import React, { useState } from 'react'

export default function ThreeDotsUseState() {
    const [myObject,setMyObject] = useState({
        myName:'vivod' , myAge:30, myDegree:'mcs'
    });
    const changeObject =()=>{
        // setMyObject({myName:'technical'})
        setMyObject({...myObject, myName:'technical'})
    }
  return (
    <>
<h1>Name:{myObject.myName} & Age:{myObject.myAge} & Degree:{myObject.myDegree}</h1>
<button className='btn' onClick={changeObject}>Update</button>
    </>
  )
}

// How to handle object using ...dots?
