//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import CustomForm from "./components/useForm"
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, setHome] = useState(0);

  return (
    <div className="App">
      <h1>beisbol</h1>
      <CustomForm />
    </div>
  );
  
}


export default App;