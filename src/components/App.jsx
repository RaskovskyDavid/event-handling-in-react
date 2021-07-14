import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  function handelClick(){
    setHeadingText("Submited")
  }
  function handleMouseOber(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
  

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor: isMouseOver? "black":"white"}}
      onMouseOver={handleMouseOber} 
      onMouseOut={handleMouseOut}
      onClick={handelClick}
      >Submit</button>
    </div>
  );
}

export default App;
