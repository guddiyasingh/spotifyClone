import React from 'react'
import songs from "./songs"



function Songs1() {

  const songs = [
  { title: 'Song One', file: '/songs/song1.mp3' },
  { title: 'Song Two', file: '/songs/song2.mp3' },
  { title: 'Song Three', file: '/songs/song3.mp3' }
]

  return (
      <div>
      <h2>Playlist</h2>
      {songs.map((song, index) => (
        <div key={index}>
          <p>{song.title}</p>
          <audio controls src={song.file} />
        </div>
      ))}
      <songs />
    </div>
  )
}

export default Songs1