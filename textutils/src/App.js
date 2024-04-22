import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let name = "Talha";
function App() {
  return (
    <>
      <Navbar about="About Us!" title="TextUtils" home="Home" />
      <div className="container my-4">
        <TextForm heading="Enter some text to analyze" />
      </div>
    </>
  );
}

export default App;
