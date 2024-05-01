import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState("dark");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };
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
      showAlert("Theme of the page has been changed to Dark", "success");
    } else {
      setDarkMode("light");
      showAlert("Theme of the page has been changed to Light", "success");
    }
  };
  

  return (
    <>
      <BrowserRouter>
        <Navbar
          about="About Us!"
          title="TextUtils"
          home="Home"
          mode={darkMode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route
              path="home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter some text to analyze"
                />
              }
            />
            <Route path="about" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
