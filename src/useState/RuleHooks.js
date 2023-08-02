import React,{useState} from 'react'

export default function RuleHooks() {
const[name,setName] =useState('technical');

    return (
    <>
<h1>{name}</h1>
    </>
  )
}


// Rules:-
// 1.Always write it inside the Component of function.
// 2.Component name must be pascalCase(first letter should be uppercase).
// 3.we can directly import or we can dirctly write it using React.hookName.
// 4.Don't call hook inside loops,condition,or nested functions. 
