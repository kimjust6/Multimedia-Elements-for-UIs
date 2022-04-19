import React from "react";
import Sketch from "react-p5";
import {Button} from "react-bootstrap";
import "./assignment3.scss";

// start position
var snakeX = [];
var snakeY = [];

var snakeLength = 3;
var gameOver = false;

let canvasX = 1200;
let canvasY = 500;
let foodX = 0;
let foodY = 0;
var image2 = null;
const frameRate = 120;
const blockSize = 25;
var xDisplacement = blockSize;
var yDisplacement = 0;
var counter = 0;

const A3P5 = (props) => {
  const setup = (p5, canvasParentRef) => {
    snakeX[0] = 0;
    snakeY[0] = 0;

    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    var cnv = p5.createCanvas(canvasX, canvasY).parent(canvasParentRef);
    // image = p5.loadImage("https://i.imgur.com/lwIysss.png");
    image2 = p5.loadImage("https://i.imgur.com/xIouWKA.png");
    // p5.background(51);
    p5.frameRate(frameRate);
    cnv.mousePressed((event) => {
      console.log("Clicked on the canvas. Event:", event);
    });

    //get a random position for the timbit/food
    foodX = getRandomInt(0, canvasX / blockSize);
    foodY = getRandomInt(0, canvasY / blockSize);
    // };
  };

  //this function gets called when there a key is pressed
  const keyPressed = (p5, key) => {
    if (key.keyCode === 40) {
      //up
      if (snakeY[1] !== snakeY[0] + blockSize) {
        xDisplacement = 0;
        yDisplacement = blockSize;
      }
    } else if (key.keyCode === 38) {
      //down
      if (snakeY[1] !== snakeY[0] - blockSize) {
        xDisplacement = 0;
        yDisplacement = -blockSize;
      }
    } else if (key.keyCode === 39) {
      //right
      if (snakeX[1] !== snakeX[0] + blockSize) {
        xDisplacement = blockSize;
        yDisplacement = 0;
      }
    } else if (key.keyCode === 37) {
      //left
      if (snakeX[1] !== snakeX[0] - blockSize) {
        xDisplacement = -blockSize;
        yDisplacement = 0;
      }
    }
  };

  const draw = (p5) => {
    if (!gameOver) {
      //check if the snake ate itself
      var i = 1;
      var snakeEaten = false;
      for (; i < snakeLength; i++) {
        if (snakeX[0] === snakeX[i] && snakeY[0] === snakeY[i]) {
          snakeEaten = true;
        }
      }
      //check if game is over
      if (
        snakeEaten ||
        snakeX[0] > canvasX ||
        snakeX[0] < 0 ||
        snakeY[0] > canvasY ||
        snakeY[0] < 0
      ) {
        gameOver = true;
      } else {
        if (
          foodX * blockSize === snakeX[0] &&
          foodY * blockSize === snakeY[0]
        ) {
          // get a random spot for the timbit/food
          foodX = getRandomInt(0, canvasX / blockSize - 1);
          foodY = getRandomInt(0, canvasY / blockSize - 1);
          snakeLength++;
        }
        //draw the background
        p5.background(51);
        p5.textSize(30);
        p5.fill(255, 255, 255);

        p5.text("Score: " + (snakeLength - 3), 10, 25);
        //draw the food
        p5.image(
          image2,
          foodX * blockSize,
          foodY * blockSize,
          blockSize,
          blockSize
        );
        //draw the snake
        for (i = 0; i < snakeLength; i++) {
          //   console.log(i + ': ' + snakeX[i]);
          p5.fill(0, 102, 153);
          p5.square(snakeX[i], snakeY[i], blockSize);
        }
        //only draw once every 5 frames
        if (counter === 5) {
          counter = 0;
          //loop through the entire snake
          i = snakeLength - 1;
          for (; i >= 0; i--) {
            snakeX[i + 1] = snakeX[i];
            snakeY[i + 1] = snakeY[i];
          }
          snakeX[0] += xDisplacement;
          snakeY[0] += yDisplacement;
        } else {
          counter++;
        }
      }
    } else {
      p5.background(51);
      p5.textSize(128);
      p5.fill(0, 102, 153);
      p5.text("Game Over!", 250, 325);
      p5.textSize(64);
      p5.text("Score: " + (snakeLength - 3), 475, 400);
    }
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function reset()
  {
    snakeLength = 3;
    snakeX[0] = 0;
    snakeY[0] = 0;
    gameOver = false;
    xDisplacement = blockSize;
    yDisplacement = 0;
    
    foodX = getRandomInt(0, canvasX / blockSize - 1);
    foodY = getRandomInt(0, canvasY / blockSize - 1);
  }

  return (
    <div>
      <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />
      <Button onClick={reset}>Retry</Button>
    </div>
  );
};

export default A3P5;
