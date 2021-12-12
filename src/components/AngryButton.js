import React from 'react'; //optional
// We want to be able to click on each button and change its state. 
//To achieve this, we need to import the useState() hook in each of the button components and call it.
import { useState } from "react";

function AngryButton() {
// hooks are not inside conditionals, loops, or other functions, 
//they need to be at the top of the component function. 
//Calling the useState() hook will return an array containing two values:
    //a reference to get the current value of the state
    //a setter function (i.e. a way to set the reference and re-render the app)

const [anger, setAnger] = useState(0);

  return (
    <button style={{backgroundColor: `rgba(255,0,0,${anger})`}} className="AngryButton">
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>

  );
}

export default AngryButton;