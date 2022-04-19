import React from "react";
import Sketch from "react-p5";
import "./assignment3.scss";

// cookie
let x = 100;
let y = 100;
let x2 = 150;
let y2 = 150;

let canvasX = 1000;
let canvasY = 600;
var image = null;

const A3P5 = (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
   var cnv =  p5.createCanvas(canvasX, canvasY).parent(canvasParentRef);
    // image = p5.loadImage("https://i.imgur.com/lwIysss.png");

    p5.textSize(20);
    p5.text("Press any key to display it on the screen", 10, 20);
    p5.text("Any of the action keys would not be recognized", 10, 40);
    cnv.mousePressed((event) => {
        console.log("Clicked on the canvas. Event:", event);
      })
        
    // };
  };


  const keyPressed = (p5,key) =>
  {
    console.log(key.keyCode);
  }

  const draw = (p5) => {
      

    // p5.background(51);
  };
  

  
  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed}/>;
};

// function myInputEvent() {
//   console.log("you are typing: ", this.value());
// }

export default A3P5;
