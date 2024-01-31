import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Heading from "./Components/Heading";
import Button from "./Components/Button";

function App() {
  const [counter, counterName] = useState(0);
  const [mode, updateMode] = useState(true)

  const addBtn = () => {
    counterName(counter + 1);
  };
  const subBtn = () => {
    counterName(counter - 1);
  };
  const zeroBtn = () => {
    counterName(0);
  };
  const changemode = () => {
    updateMode(!mode);
    console.log(mode);
  };

  document.body.style.backgroundColor = mode ? "white" : "black";

  return (
    <>
      <div className="form-check form-switch mt-2 d-flex justify-content-end me-3">
        <input className="form-check-input text-end me-1"onChange={changemode} type="checkbox" 
         role="switch" id="flexSwitchCheckDefault"></input>
        <label className={`form-check-label ms-2 text-${mode ? "dark" : "light"}`} >Dark 
         Mode</label>
      </div>

      <Heading chmode={mode} text="Counter App" ></Heading> 
      <Heading chmode={mode} text={counter}></Heading>

      <div className="d-flex justify-content-center ">
        <Button upmode={mode} text="+" func={addBtn}></Button>
        <Button upmode={mode} text="-" func={subBtn}></Button>
        {counter!=0 &&<Button upmode={mode} text="0" func={zeroBtn}></Button>}    
      </div>

    </>
  );
}

export default App;
