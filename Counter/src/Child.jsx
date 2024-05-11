
import React from "react";

function Child(props) {
  console.log("Child rendered")
  return (
   <h1>Child Name {props.name}</h1> 
  )
}

export default React.memo(Child);
