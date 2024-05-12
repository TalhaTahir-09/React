import { useState } from "react";
import Home from "./assets/routes/home";
import About from "./assets/routes/about";
import Form from "./assets/routes/forms";
import Navbar from "./assets/routes/Navbar";
import Addform from "./assets/routes/add-form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/forms" element={<Form/>} />
          <Route path="/add-form" element={<Addform/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;