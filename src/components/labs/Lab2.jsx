import React from "react";
import "./lab2.scss";

const Lab2 = () => {
  return (
    <div className="container">
      <div className="all">
        <div>
          <h1>Lab 2</h1>
          <h2>Reflection</h2>
        </div>
        <div className="content">
          <div className="text">
            <p>
              1) I made changed the image to greyscale. I did this because I
              believe that you can make an image look a lot more interesting by
              taking away some of the colours. It can give an image a more
              classy or timeless aesthetic.
            </p>
            <p>
              2) The file is smaller in comparison to the original file. This is
              because the original image has more information than the modified
              one. Sometimes if you do not have your export settings set
              correctly, you cane export to a higher resolution, resulting in a
              larger file than the original. Generally speaking however, this
              should not happen.
            </p>
            <p>
              3) When creating an image from scratch, I was unsure of what I
              wanted to try to create and unsure of what application I wanted to
              do it in. I ultimately decided to use paint. This meant that my
              image would have to be more basic, which is why I decided to
              recreate an emoji.
            </p>
            <p>
              4) I believe that this lab was fairly straightforward. Given that
              Lab 1 was the setup the entire template of this website, I believe
              that Lab 1 was more difficult in comparison. I would say Lab 2 is
              about a 3/10 in terms of difficulty. Despite how straightforward
              this lab was, I did enjoy it and was able to relearn how to use
              editing software that I have not played with in a long time.
            </p>
          </div>
          <div>
            <div className="images">
              <h2>Original</h2>
              <img src="https://i.imgur.com/JasUOnP.jpg" alt="Dog"></img>
            </div>
            <div className="images">
              <h2>Edited</h2>
              <img
                src="https://i.imgur.com/rNSK1gq.jpg"
                alt="Black and White Dog"
              ></img>
            </div>
            
            <div className="images">
            <h2>Drawn</h2>
              <img
                src="https://i.imgur.com/e1ng27K.png"
                alt="Paint Thonk"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab2;
