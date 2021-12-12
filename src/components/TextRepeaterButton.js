import React from 'react'; //optional
// We want to be able to click on each button and change its state. 
//To achieve this, we need to import the useState() hook in each of the button components and call it.
import { useState } from "react";

function TextRepeaterButton() {
// hooks are not inside conditionals, loops, or other functions, 
//they need to be at the top of the component function.
//Calling the useState() hook will return an array containing two values:
    //a reference to get the current value of the state
    //a setter function (i.e. a way to set the reference and re-render the app)


const [repetition, setRepition] = useState(1);
const handleClick = function () {
  setRepition(repetition + 1);
}

const repetitionArray = [];
for (let i = 0; i < repetition; i++) {
    repetitionArray.push(<span key={i}>I like this text!</span>);
    // reason why we did this as rendering arrays in React we require a key value for each child of an array. 
}

  return (
    <button onClick={handleClick} className="TextRepeaterButton">
      {repetitionArray}
    </button>
  );
}

export default TextRepeaterButton;