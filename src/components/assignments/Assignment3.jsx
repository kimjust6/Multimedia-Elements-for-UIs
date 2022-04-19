import { Button } from 'react-bootstrap'

import React from "react";
import A3P5 from "./Assignment3P5";

const reloadPage = () => {
  window.location.reload()
}
const Assignment3 = () => {
  return (
    <div className="container">
      {/* <button className="btn btn-primary" onClick={getRandomInt}>Button</button> */}
      <h1>Assignment 3</h1>
      <A3P5 />
      {/* <Button className="primary" onClick={reloadPage}>Try Again</Button> */}
      <br />
      <br />
      <h1>Reflection</h1>
      <p>I created a snake game that you can control using arrows. The goal is to eat as many timbits as possible to improve your score.</p>
      <br></br>
      <a target="_blank" href="https://github.com/kimjust6/Multimedia-Elements-for-UIs/blob/main/src/components/assignments/Assignment3P5.js" >Here</a> is a link to the p5.js code.

    </div>
  );


};



export default Assignment3;
