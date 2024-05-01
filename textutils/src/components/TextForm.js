import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // functions:
  
  function wordCounter(str) {
    let count = 0;
    let strArray = str.split(" ");
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] !== "") {
        count++;
      }
    }
    return count;
  }

  function toUpFunction() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function toLoFunction() {
    let newText = text.toLowerCase();
    setText(newText);
  }
  function toCapFunction() {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        words[i] = words[i][0].toUpperCase(" ") + words[i].substring(1);
      }
    }
    setText(words.join(" "));
  }
function emailExtractor(){
let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
let emailArray = text.split(" ");
let foundEmails = []
for (let i = 0; i < emailArray.length; i++) {
  if(emailPattern.test(emailArray[i])){
    foundEmails.push(emailArray[i])
  }
}
  setText(foundEmails.toString())
}
  function toClearFunction() {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared!", "success");
  }
  function onChangeEvent(event) {
    setText(event.target.value);
  }

  // 
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Text Here"
            onChange={onChangeEvent}
            id="myBox"
            rows="8"
            value={text}
          ></textarea>
        </div>
        <div className="btn-container d-flex gap-2">
          <button className="btn btn-primary" onClick={toUpFunction}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={toLoFunction}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary" onClick={toCapFunction}>
            Convert to Capitalized Case
          </button>
          <button className="btn btn-primary" onClick={toClearFunction}>
            Clear Text
          </button>
          <button className="btn btn-primary" onClick={emailExtractor}>
            Email Text
          </button>
        </div>
        <div className="container my-3">
          <h2 className="">Text Summary</h2>
          <p>
            Your text has <b>{wordCounter(text)}</b>&nbsp;
            {wordCounter(text) > 1 ? "words" : "word"}&nbsp;
            <b>{text.length} characters</b>.
          </p>
          <p>
            Time needed to read{" "}
            <b>{(0.001133 * text.length).toFixed(2)} minutes</b>.
          </p>
          <h2 className="mt-5">Text Preview :</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
