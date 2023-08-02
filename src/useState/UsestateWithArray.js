import React from "react";

export default function UsestateWithArray() {
    
  const bioData = [
    {
      id: 0,
      myName: "vinod",
      age: 25,
    },
    {
      id: 1,
      myName: "jio",
      age: 34,
    },
  ];
  console.log(bioData);
  const [myArray, setmyArray] = React.useState(bioData);

  const clearArray = () => {
    // setmyArray
    setmyArray([]);
  };
  return (
    <>
      {myArray.map((curElm) => 
          <h1>
            Name:{curElm.myName} & Age:{curElm.age}
          </h1>
      )}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  );
}

// how to use useState with array?
