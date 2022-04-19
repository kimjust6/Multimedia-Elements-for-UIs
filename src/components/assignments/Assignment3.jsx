import React from "react";
import A3P5 from "./Assignment3P5";

const Assignment3 = () => {
  return (
    <div className="container">
      {/* <button className="btn btn-primary" onClick={getRandomInt}>Button</button> */}
      <h1>Assignment 3</h1>
      <A3P5 />
      <br />

      <br />
    </div>
  );
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};



export default Assignment3;
