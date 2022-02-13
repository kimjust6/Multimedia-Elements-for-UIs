import React from "react";
import { Howl, Howler } from "howler";
import "./lab3.scss";

import sound1 from "./resource/2022-02-12-20-21-19.mp3";
import sound2 from "./resource/2022-02-12-20-21-19-processed.mp3";

import { Button } from "react-bootstrap";

const audioClips = [
  // {sound: `../resources/Abandoned & GalaxyTones - Luna (Feat. DNAKM) [NCS Release].mp3`, label: "Play"},

  { sound: sound1, label: "Original" },
  { sound: sound2, label: "Edited" },
];

const Lab3 = () => {
  let soundPlay = function (src) {
    const sound = new Howl({
      src,
      //allows us to use external links
      html5: true,
    });
    sound.play();
  };
  let RenderButtonSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <div className="sounds">
          <Button
            variant="dark"
            key={index}
            onClick={() => soundPlay(soundObj.sound)}
          >
            {soundObj.label}
          </Button>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="all">
        <div>
          <h1>Lab 3</h1>
          <h2>Reflection</h2>
        </div>
        <div className="content">
          <div className="text">
            <p>
              1) I chose to use the .mp3 extension because of its compatibility
              and flexibility. MP3 is a compressed and lossy file format, but it
              can still sound good as long as the bitrate is good. For a file
              like the recording that I made, I do not need to have uncompressed
              or lossless audio. This is because I am not as concerned about the
              audio quality as I am not playing music or complex sounds. At the
              same time, I do still want the audio to be clear.
            </p>
            <p>2) </p>
            <p>
              3) There are various types of audio files and each have their own
              strengths and weaknesses. Below is a list of a few different file
              formats, but there are too many to list all of the different
              types.
              <br />
              <div>.mp3</div>
              <li>
                Popular compressed lossy file format that strives to achieve cd
                quality.
              </li>
              <div>.aac</div>
              <li>Apple's version of mp3. Is still compressed and lossy.</li>
              <div>.wav</div>
              <li>Uncompressed and lossless format that is high resolution</li>
              <div>.flac</div>
              <li>
                Compressed and lossless file format that is the preferred format
                for storing hi resolution audio.
              </li>
            </p>
            <p>
              4) I added the reverb effect to the audio sample. What this does
              is it makes audio have an echo effect. I did this because I
              thought it would be fun to see what it would sound like with my
              voice.
            </p>
          </div>
        </div>
        <div>
          <div className="audio">
            <h2>Audio</h2>
            {RenderButtonSound()};
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab3;
