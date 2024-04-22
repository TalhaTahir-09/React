import React from 'react'
let userName = prompt("Enter your name")
if(userName === ""){
    userName = "Guest";
}

export default function NameDisplayer() {
  return (
    <div>
      <h1>Hello {userName}!</h1>
    </div>
  )
}
