import { useState, useRef } from "react";
import { songs } from "./songs";

export default function PlaylistPlayer() {
  const [current, setCurrent] = useState(0);
  const audioRef = useRef(null);

  const playSong = (index) => {
    setCurrent(index);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const nextSong = () => {
    playSong((current + 1) % songs.length);
  };

  const prevSong = () => {
    playSong((current - 1 + songs.length) % songs.length);
  };

  return (
    <div style={{ width: 300, padding: 20 }}>
      <h3>🎵 React Playlist</h3>

      <p><b>{songs[current].title}</b><br />{songs[current].artist}</p>

      <audio
        ref={audioRef}
        src={songs[current].url}
        controls
        onEnded={nextSong}
        style={{ width: "100%" }}
      />

      <div style={{ marginTop: 15 }}>
        <button onClick={prevSong}>⏮ Previous</button>
        <button onClick={nextSong} style={{ marginLeft: 10 }}>⏭ Next</button>
      </div>

      <h4 style={{ marginTop: 20 }}>Playlist</h4>
      <ul>
        {songs.map((song, i) => (
          <li
            key={i}
            style={{
              cursor: "pointer",
              color: i === current ? "green" : "black"
            }}
            onClick={() => playSong(i)}
          >
            {song.title} — {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}
