import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let name = "Talha";
function App() {
  const [darkMode, setDarkMode] = useState("dark");
  const [alert, setAlert] = useState("");
  const showAlert = (message, type) => {
    setAlert({msg : message, type})
    setTimeout(() => {
      setAlert("")
    }, 1500);
  }
  if (darkMode === "dark") {
    document.body.style.background = "#333";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      showAlert("Theme of the page has been changed to Dark", "success")
    } else {
      setDarkMode("light");
      showAlert("Theme of the page has been changed to Light", "success")
    }
  };
 
  return (
    <>
      <Navbar
        about="About Us!"
        title="TextUtils"
        home="Home"
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container my-4">
        <TextForm showAlert={showAlert}  heading="Enter some text to analyze" />
      </div>
    </>
  );
}

export default App;
