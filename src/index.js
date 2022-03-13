import React from "react";
import ReactDOM from "react-dom";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
import * as math from "./calculator";
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{math.default(1, 2)}</li>
    <li>{math.multiply(2, 3)}</li>
    <li>{math.subtract(7, 2)}</li>
    <li>{math.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
