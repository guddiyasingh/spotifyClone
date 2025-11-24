import { useState } from 'react'
import './App.css'

function App() {

  

  return (
    <>
     <div className="container flex">
      <div className='left border bg-black'>
        <div className="home">
          <div className="logo">
            <img className="invert"src="spotify.png" alt="" />spotify
          </div>
          <ul>
            <li>
              <img className='invert' src="home.svg" alt="home" /> Home
            </li>
            <li><img className="invert"src="search.svg" alt="search" />Search</li>
          </ul>
        </div>
        <div className="library bg-black"></div>
      </div>
      <div className='right border'></div>
     </div>
    </>
  )
}

export default App
