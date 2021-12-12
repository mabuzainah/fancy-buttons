import React from 'react'; //optional
// We want to be able to click on each button and change its state. 
//To achieve this, we need to import the useState() hook in each of the button components and call it.
import { useState } from "react";

function LightSwitchButton() {
// hooks are not inside conditionals, loops, or other functions, 
//they need to be at the top of the component function.
//Calling the useState() hook will return an array containing two values:
    //a reference to get the current value of the state
    //a setter function (i.e. a way to set the reference and re-render the app)


const [light, setLight] = useState('off');

  return (
    <button className="LightSwitchButton">
      {light === "on" && <span className="on"><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;