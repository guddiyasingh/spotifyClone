import { useState } from 'react'
import './App.css'

function App() {

  

  return (
    <>
     <div className="container flex  bg-black">
      <div className='left  s'>
        <div className="home bg-grey rounded m-1 p-1">
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
        <div className="library bg-grey rounded m-1 p-1">
        <div className="heading">
          <img className='invert' src="libray.png" alt="" />
          <h2>your Library</h2>
        </div>
        </div>
      </div>
      <div className="footer">
        <div data-testid = "left-sidebar-legal-links">
          <div><a href=""></a><span>Legal</span></div>
          <div><a href=""></a><span>Privacy Center</span></div>
          <div><a href=""></a><span>Cookies</span></div>
          <div><a href=""></a><span>About Ads</span></div>
        </div>
      </div>
      <div className='right border'>

        sdsdfsdfsd
      </div>
     </div>
    </>
  )
}

export default App
