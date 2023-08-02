import React, { useState } from "react";

export default function ChangeState() {

    const[myName,setmyName]=useState('technical');
//   console.log(useState("technical"));

//   let myfirstVal = useState("thapa")[0];
//   console.log(myfirstVal);

//   var val = "technical thapa";
  const changeName = () => {
    // val = "vinod thapa";
    // console.log(val);
    setmyName('speed')
  };
  console.log(myName);
  return(
    <>
<h1>{myName}</h1>
<button className="btn" onClick={changeName}>Click me</button>
    </>
      );
    }
