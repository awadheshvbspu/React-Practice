import React from 'react'

export default function UseStateTodoList() {
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
      const removeElem =(id)=>{
        // alert(id);
        const myNewArray =myArray.filter((curElm)=>{
            return curElm.id != id;
        })
        setmyArray(myNewArray);
      }
  return (
    <>
      {myArray.map((curElm) => {
        return(
      
          <h1 key={curElm.id}>
            Name:{curElm.myName} & Age:{curElm.age}
            <button onClick={()=> removeElem(curElm.id)}>Remove</button>
          </h1>
      );
      })}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  )
}
