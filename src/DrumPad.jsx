import { useState, useRef, useEffect } from "react";
import { data } from "./data";

const DrumPad = ({ setDisplayText }) => {
  const keyArr = data.map((drumPad) => drumPad.pad);

  // kEYBOARD KEY PRESS EVENTS
  document.addEventListener("keydown", (e) => {
    let keyPressed = e.key;
    const drumKeyPressed = keyArr.includes(keyPressed);
    if (drumKeyPressed) {
      // audio output
      let audioElement = document.getElementById(keyPressed);
      audioElement.play();
      // display text
      let { desc } = data.find((element) => element.pad === keyPressed);
      // console.log(desc);
      setDisplayText(desc);
      let btn = document.getElementById(desc);
      btn.focus();
    }
  });

  // DRUM KEYPAD EVENTS
  const handleClick = (e) => {
    let audioElement = e.currentTarget.childNodes[1];
    console.log(audioElement);
    audioElement.play();
    let desc = e.currentTarget.id;
    console.log(desc);
    setDisplayText(desc);
  };

  return (
    <>
      {/* 9 DRUM PAD ELEMENTS */}
      <button
        type="button"
        className="drum-pad"
        id={data[0].desc}
        onClick={handleClick}
      >
        {data[0].pad}
        <audio
          className="clip"
          id={data[0].pad}
          src={data[0].clip}
          type="audio/mp3"
        ></audio>
      </button>
      <button
        type="button"
        className="drum-pad"
        id={data[1].desc}
        onClick={handleClick}
      >
        {data[1].pad}
        <audio
          className="clip"
          id={data[1].pad}
          src={data[1].clip}
          type="audio/mp3"
        ></audio>
      </button>
      <button
        type="button"
        className="drum-pad"
        id={data[2].desc}
        onClick={handleClick}
      >
        {data[2].pad}
        <audio
          className="clip"
          id={data[2].pad}
          src={data[2].clip}
          type="audio/mp3"
        ></audio>
      </button>
      <button
        type="button"
        className="drum-pad"
        id={data[3].desc}
        onClick={handleClick}
      >
        {data[3].pad}
        <audio
          className="clip"
          id={data[3].pad}
          src={data[3].clip}
          type="audio/mp3"
        ></audio>
      </button>
      <button
        type="button"
        className="drum-pad"
        id={data[4].desc}
        onClick={handleClick}
      >
        {data[4].pad}
        <audio
          className="clip"
          id={data[4].pad}
          src={data[4].clip}
          type="audio/mp3"
        ></audio>
      </button>
      <button
        type="button"
        className="drum-pad"
        id={data[5].desc}
        onClick={handleClick}
      >
        {data[5].pad}
        <audio
          className="clip"
          id={data[5].pad}
          src={data[5].clip}
          type="audio/mp3"
        ></audio>
      </button>
      <button
        type="button"
        className="drum-pad"
        id={data[6].desc}
        onClick={handleClick}
      >
        {data[6].pad}
        <audio
          className="clip"
          id={data[6].pad}
          src={data[6].clip}
          type="audio/mp3"
        ></audio>
      </button>
      <button
        type="button"
        className="drum-pad"
        id={data[7].desc}
        onClick={handleClick}
      >
        {data[7].pad}
        <audio
          className="clip"
          id={data[7].pad}
          src={data[7].clip}
          type="audio/mp3"
        ></audio>
      </button>
      <button
        type="button"
        className="drum-pad"
        id={data[8].desc}
        onClick={handleClick}
      >
        {data[8].pad}
        <audio
          className="clip"
          id={data[8].pad}
          src={data[8].clip}
          type="audio/mp3"
        ></audio>
      </button>
    </>
  );
};

export default DrumPad;
