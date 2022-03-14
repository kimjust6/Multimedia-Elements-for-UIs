import React from "react";
import LabsNav from "./LabsNav";
import "./lab4.scss";

const Lab4 = () => {
  return (
    <div className="container">
      <h1>Lab 4</h1>

      <div className="lab4">
        <div className="text">
          <h2>Reflection</h2>
          <p>
            In my spare time, I enjoy rock climbing. I tend to fall quite a bit,
            so I made a compilation of myself falling with some light and fun
            music that is free from copyright. I combined a bunch of videos that
            I saved up over the years and cut to the parts where I fall. I added
            some music in the background and added title screens to show what
            music I used. I exported the file using the x264 codec in an mp4
            container so that the file would be compatible with youtube. I
            uploaded the file to youtube and embedded the link to my portfolio
            webpage.
          </p>
        </div>
        <div className="content">
          <div className="video">
            <iframe
              width="1904"
              height="772"
              src="https://www.youtube.com/embed/LTi0vEiIayM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab4;
