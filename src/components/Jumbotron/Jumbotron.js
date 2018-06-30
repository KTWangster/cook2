import React from "react";
import './Jumbotron.css';

const Jumbotron = ({ children }) =>

  <div className="jumbotron text-center">
    <div className="overlay">
    </div>
    <div className="background-image">
    </div>
    <div className="caption">
   
      <h1>Cooky App</h1>
      <p>Yum it's so delicious</p>
    </div>
  </div>


export default Jumbotron;
