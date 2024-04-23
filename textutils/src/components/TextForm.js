import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [btnText, setBtnText] = useState("Toggle Dark Mode");

  // Dark mode
  function toggleDarkMode() {
    if (btnText === "Toggle Dark Mode") {
      setBtnText("Toggle Light Mode");
    } else {
      setBtnText("Toggle Dark Mode");
    }
    document.querySelector(".navbar").classList.toggle("dark-mode");
    document.querySelector(".navbar-title").classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
    [...document.querySelectorAll(".nav-link")].forEach((item) => {
      item.classList.toggle("dark-mode");
    });
    return setIsDarkMode(!isDarkMode);
  }
  const MyStyle = {
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "#333" : "white",
  };

  // functions
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

  function toClearFunction() {
    let newText = "";
    setText(newText);
  }
  function onChangeEvent(event) {
    setText(event.target.value);
  }
  function emailExtractor(array) {
    let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    let foundEmails = [];
    for (let i = 0; i < array.length; i++) {
      if (emailPattern.test(array[i])) foundEmails.push(array[i]);
    }
    setText(foundEmails);
  }

  return (
    <>
      <div className="container" style={MyStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={MyStyle}
            placeholder="Enter Text Here"
            value={text}
            onChange={onChangeEvent}
            id="myBox"
            rows="8"
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
          <button
            className="btn btn-primary mx-2"
            onClick={() => emailExtractor(text.split(" "))}
          >
            Extract Email
          </button>
          <button className="btn btn-primary" onClick={toggleDarkMode}>
            {btnText}
          </button>
        </div>
        <div className="container my-3">
          <h2 className="">Text Summary</h2>
          <p>
            Your text has <b>{text.split(" ").length} words</b> and{" "}
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
