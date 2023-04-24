//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState;
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
    </div>
  );
}

export default App;
