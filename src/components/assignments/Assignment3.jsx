import { Button } from "react-bootstrap";

import React from "react";
import A3P5 from "./Assignment3P5";

const Assignment3 = () => {
  return (
    <div className="container">
      <div className="all">
        <div className="title">
          <h1>Assignment 3</h1>
          <A3P5 />
        </div>
        <div className="reflection">
          <h1>Reflection</h1>
          <p>
            I created a snake game that you can control using arrows. The goal
            is to eat as many timbits as possible to improve your score.
            <br></br>
            <a
              target="_blank"
              href="https://github.com/kimjust6/Multimedia-Elements-for-UIs/blob/main/src/components/assignments/Assignment3P5.js"
            >
              Here <span></span>
            </a>
            is a link to the p5.js code.
            <br></br>
            To move the snake, I simply created an iterator that looped from the
            end of the snake to the beginning of the snake making it so that
            snakePosition[n+1] = snakePosition[n]. I then moved the head of the
            snake in the direction it was supposed to move. I also check for
            lose conditions and conditions where the snake needs to grow (ie
            eating the timbit). Every time I draw, I draw the background, I draw
            the snake, and I draw the timbit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assignment3;
