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
        <br></br>
        <h1>Reflection</h1>
        <p>
          Learning p5.js has been very interesting. I think this is my favourite
          lab yet because it is something that is very different from what I
          have done before. Learning how to animate and move shapes will be very
          useful in the future. I have seen some p5.js demos that are very
          interesting and shows how powerful this library is.
          <br></br>I decided that I wanted to create bouncing cookies for Lab 5.
          I decided this because I thought one of the more simpler designs that
          could create while still being very clear. To make the shapes move, I
          created an x displacement and y displacement and added it to the
          current x and y coordinates. If x coordinates got to the edge of the
          screen, I simply changed the direction of x. Similarly, I did a check
          for y coordinates and made the x and y increment and drecremnt
          independantly. I utilized the reference documentation for p5.js:
          <a target="_blank" href="https://p5js.org/" rel="noreferrer">
            {" "}
            https://p5js.org/{" "}
          </a>{" "}
          when creating this lab.
          <br />
          I chose an image of a cookie to show the difference between an actual
          cookie and the cookie that I drew using shapes. I thought that having
          the two different cookies would be fun to showcase.
          <br />
          Here is a link to the two p5 components coded in react:
          <br></br>
          <a
            target="_blank"
            href="https://github.com/kimjust6/Multimedia-Elements-for-UIs/blob/main/src/components/labs/Lab5P5.js"
            rel="noreferrer"
          >
            {" "}
            Component 1{" "}
          </a>{" "}
          <br></br>
          <a
            target="_blank"
            href="https://github.com/kimjust6/Multimedia-Elements-for-UIs/blob/main/src/components/labs/Lab5P5.1.js"
            rel="noreferrer"
          >
            {" "}
            Component 2{" "}
          </a>{" "}
          <br></br>
          <br></br>
          <h1>References</h1>
          <p>
            Crunchy Chocolate Chip Cookies. (n.d.).{" "}
            <a
              target="_blank"
              href="https://www.ricardocuisine.com/"
              rel="noreferrer"
            >
              {" "}
              https://www.ricardocuisine.com
            </a>{" "}
            Retrieved April 3, 2022, from{" "}
            <a
              target="_blank"
              href="https://images.ricardocuisine.com/services/recipes/500x675_443664758542a9fa22f234.jpg"
              rel="noreferrer"
            >
              {" "}
              https://images.ricardocuisine.com/services/recipes/500x675_443664758542a9fa22f234.jpg
            </a>{" "}
            <br></br>
            <br></br>
            p5.js. (n.d.). Retrieved April 3, 2022, from{" "}
            <a target="_blank" href="https://p5js.org/ " rel="noreferrer">
              {" "}
              https://p5js.org/
            </a>{" "}
          </p>
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Lab5;
