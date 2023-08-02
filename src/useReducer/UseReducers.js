import React, { useReducer, useState } from 'react'

const initialValue=0;
const reducer =(state,action)=>{
    if(action.type==='INCREMENT'){
        return(state+1)
    }
    if(action.type==='DECREMENT'){
        return(state-1)
    }
return state;
}
export default function UseReducers() {
    // const[count,setCount] =useState(0);

    const[state,dispatch]=useReducer(reducer,initialValue)
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"INCREMENT"})} className='btn btn-success'>+</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})} className='btn btn-danger' >-</button>
    </>
  )
}
