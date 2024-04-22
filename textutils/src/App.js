import "./App.css";
import Navbar from "./components/Navbar"
import NameDisplayer from "./components/NameDisplayer"

let name = "Talha";
function App() {
  return (
    <>
      <Navbar about="About Us!" home="Home"/>
      <NameDisplayer />
    </>
  );
}


export default App;
