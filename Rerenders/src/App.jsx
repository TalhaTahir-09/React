import { useState } from "react";
import CountDisplayer from "./assets/routes/CountDisplayer.jsx";
import NameDisplayer from "./assets/routes/NameDisplayer.jsx";
import "./App.css";
let nameSetter = prompt("Enter Your Name!");
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guest");
  if (name !== nameSetter) {
    setName(nameSetter);
  }
  console.log("Parent Rendered!");

  return (
    <>
      <NameDisplayer name={name} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <CountDisplayer count={count} />
    </>
  );
}

export default App;
