import React,{useRef, useState} from 'react'

export default function UserefHooks() {
const[show,setShow] = useState(false);
// it like a useState only and its preserve the value.no rerender

    const name= useRef(null)
    const submitForm =(e)=>{
        e.preventDefault();
        const names= name.current.value;
        names ==="" ? alert('plz fill the data') : setShow(true);
        
    }
  return (
    <>
    <div>
        <form action="" onSubmit={submitForm}>
        <div>
            <lable htmlFor='name'>enter your Name</lable>
            <input type='text' id='name' ref={name}/>
        </div>
        <br/>
        <button className='btn btn-warning'>Submit</button>
        </form>
        <p>{show ? 'your lucky name is ${name.current.value}':""}</p>
    </div>
    </>
  )
}
