import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    // let [wordCount, setWordCount] = useState(0);

    function toUpFunction(){
        let newText = text.toUpperCase()
        setText(newText);
    }
    function toLoFunction(){
        let newText = text.toLowerCase()
        setText(newText);
    }
    function onChangeEvent(event){
        setText(event.target.value)
    }
   
    // useEffect(() => {
    //     let count = text.trim().split(/\s+/).length;
    //     if (text.trim().endsWith(" ")) {
    //         count -= 1;
    //     }
    //     setWordCount(count);
    // }, [text]);

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Enter Text Here" value={text} onChange={onChangeEvent} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={toUpFunction}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={toLoFunction}>Convert to Lowercase</button>
      <div className="container my-3">
        <h2 className="">Text Summary</h2>
        <p>Your text has <b>{wordCount} words</b> and <b>{text.length} characters</b>.</p>
        <p>Time needed to read <b>{(((0.001133 * text.length)).toFixed(2))} minutes</b>.</p>
        <h2 className="mt-5">Text Preview :</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
