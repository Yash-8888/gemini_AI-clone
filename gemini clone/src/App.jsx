import { useState } from "react";
import SideBar from "./Component/SideBar/SideBar";

import Main from "./Component/Main/Main.jsx";

import "./App.css";

function App() {

  const [prompt, setPrompt] = useState("");
  const [resPromts, setResPromts] = useState([]);

  return (
    <div className="app-container">
      <SideBar 
        resPromts={resPromts}
        onSelect={setPrompt}
      />
      
      <Main
        prompt={prompt}
        setPrompt={setPrompt}
        resPromts={resPromts}
        setResPromts={setResPromts}
      />
    </div>
  );
}

export default App;
