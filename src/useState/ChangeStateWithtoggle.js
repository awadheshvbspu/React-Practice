import React, { useState } from "react";

export default function ChangeStateWithtoggle() {
  const [myName, setmyName] = useState("technical");
  const changeName = () => {
    let val = myName;

    (val ==='technical') ? setmyName('speed'):setmyName('technical');
    // if (val === "technical") {
    //   setmyName("speed");
    // } else {
    //   setmyName("technical");
    // }
  };
  console.log(myName);
  return (
    <>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>
        Click me
      </button>
    </>
  );
}
