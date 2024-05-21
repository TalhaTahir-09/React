import React from "react";

document.cookie = "username=Talha; expires=Thu, 20 May 2024 12:55:00 UTC; path=/";
let cookies = document.cookie;
console.log(cookies);
function Child(props) {
  return <h1>Child Name {props.name}</h1>;
}

export default React.memo(Child);
