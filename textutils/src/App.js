import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function toggleDarkMode() {
  if(btnText === "Toggle Dark Mode"){
    setBtnText("Toggle Light Mode")
  }else{
    setBtnText("Toggle Dark Mode")
  }
  document.querySelector(".navbar").classList.toggle('dark-mode');
  document.querySelector(".navbar-title").classList.toggle('dark-mode');
  document.body.classList.toggle('dark-mode');
  [...document.querySelectorAll(".nav-link")].forEach(item => {
    item.classList.toggle('dark-mode')
  });
  return setIsDarkMode(!isDarkMode);
}
let name = "Talha";
function App() {
  return (
    <>
      <Navbar about="About Us!" title="TextUtils" home="Home"/>
      <div className="container my-4">
        <TextForm heading="Enter some text to analyze" />
      </div>
    </>
  );
}

export default App;
