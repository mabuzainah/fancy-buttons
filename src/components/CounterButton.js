import React from 'react'; //optional
// We want to be able to click on each button and change its state. 
//To achieve this, we need to import the useState() hook in each of the button components and call it.
import { useState } from "react";

function CounterButton(props) {
// hooks are not inside conditionals, loops, or other functions, 
//they need to be at the top of the component function. 
//Calling the useState() hook will return an array containing two values:
    //a reference to get the current value of the state
    //a setter function (i.e. a way to set the reference and re-render the app)

const [clickAmount, setClickAmount] = useState(0);

const handleClick = function () {
    setClickAmount(clickAmount + 1);
}
  return (
    <button onClick={handleClick} className="CounterButton">
      You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;