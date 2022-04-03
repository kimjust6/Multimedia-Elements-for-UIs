import React from "react";
import Lab5P5 from "./Lab5P5";
import Lab5P51 from "./Lab5P5.1";
import "./lab5.scss";

const Lab5 = () => {
  return (
    <div className="container">
      <h1>Lab 5</h1>
      <div className="p5">
        <Lab5P5 /> <Lab5P51 />
      </div>
      <div>
        <h1>Reflection</h1>
        <p>
          I decided that I wanted to create bouncing cookies for Lab 5. I
          decided this because I thought one of the more simpler designs that I
          could create while still being very clear. I utilized the reference
          documentation for p5.js:
          <a target="_blank" href="https://p5js.org/" rel="noreferrer">
            {" "}
            https://p5js.org/{" "}
          </a>{" "}
          when creating this lab.
          <br />
          I chose an image of a cookie to show the difference
          between an actual cookie and the cookie that I drew using shapes. I
          thought that having the two different cookie would be fun to showcase.
          <br />

          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Lab5;
