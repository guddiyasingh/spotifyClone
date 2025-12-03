import { useState, useRef } from "react";
import { songs } from "./songs";

export default function PlaylistPlayer() {
  const [current, setCurrent] = useState(0);
  const audioRef = useRef();

  const playSong = (index) => {
    setCurrent(index);

    setTimeout(() => {
      const audio = audioRef.current;
      audio.pause();
      audio.load();
      audio.play().catch(err => {
        console.warn("Firefox blocked autoplay:", err);
      });
    }, 50);
  };

  return (
    <div>
      <h2>Now Playing: {songs[current].title}</h2>

      <audio ref={audioRef} controls style={{ width: "100%" }}>
        <source src={songs[current].url} type="audio/mp3" />
      </audio>

      <ul>
        {songs.map((song, i) => (
          <li
            key={i}
            onClick={() => playSong(i)}   // <--- USER CLICK FIXES FIREFOX
            style={{
              cursor: "pointer",
              color: i === current ? "green" : "black"
            }}
          >
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
