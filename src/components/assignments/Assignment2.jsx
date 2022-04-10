
import React from 'react';
import "./assignment2.scss";
import AssignmentsNav from './AssignmentsNav';


const Assignment2 = () => {
  return (
    <div className="container">
      <h1>Assignment 2</h1>

      <div className="assignment2">
        <div className="text">
          <h2>Music</h2>
          <p>
            YouTube. (2018). Intro : Serendipity 여자 Cover by Line.B. YouTube. Retrieved April 10, 2022, from <a href="https://www.youtube.com/watch?v=fTSgLiGLYJI" target="_blank">https://www.youtube.com/watch?v=fTSgLiGLYJI. </a>
          </p>
          <h2>Equipment</h2>
          <p>
            <li>Smartphone</li>
            <li> Laptop </li>
          </p>
          <h2>Notes</h2>
          <p>
            I created this video with the intent to review the laptop that I have been using for the last year.
            I showcase the specifications and do a soundtest of the keyboard.  Typically people care about performance, battery life, and the keyboard, so that was the areas that I decided to focus my time on.
          </p>
        </div>
        <div className="content">
          <div className="video">
            <iframe width="1904" height="772" src="https://www.youtube.com/embed/hrtTphVENC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment2;
