import React from "react";
import "./assignment1.scss";

const Assignment1 = () => {
  return (
    <div className="container">
      <h1>Assignment 1</h1>

      <div className="assignment1">
        <div className="text">
          <h2>Reflection</h2>
          <p>
            In order to create the video, I had to select what text I wanted to
            use. I remembered when I was a child, my mother would read Aesop's
            Fables. I also knew that there are no copyright issues as it is in
            the public domain. With these considerations, I decided to use one
            of the fables for my video. I then selected a story and found stock
            images on pexels and other websites that share copyright free
            images.
            <br></br>
            <br></br>
            Once I chose the story and images, I had to find music. I decided to
            choose some music that was more calming and somewhat like a lullaby
            for children. Using premiere pro, I then created the video using the
            music I chose, the audio from reading the story, and the images from
            pexels. The most difficult part of this assignment was finding
            relevant images that were free from copyright. Overall, the
            assignment was fairly straightforward and I would grade the
            difficulty about 3/10. Although the assignment was straightforward
            it was enjoyable and fun.
          </p>
        </div>
        <div className="content">
          <div className="video">
            <iframe
              width="1904"
              height="772"
              src="https://www.youtube.com/embed/bHEfrdwYAmk"
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

export default Assignment1;
