import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [isHide, setIsHide] = useState(true);

  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <p id="para" className={isHide?"hide":"show"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={()=>setIsHide(!isHide)}>Hide/Show</button>
    </div>
  );
}

export default App
