import { useState } from 'react'
import './App.css'

function App() {



  return (
    <>
      <div className="container flex  bg-black">
        <div className='left  s'>
          <div className="home bg-grey rounded m-1 p-1">
            <div className="logo">
              <img className="invert" src="spotify.png" alt="" />spotify
            </div>
            <ul>
              <li>
                <img className='invert' src="home.svg" alt="home" /> Home
              </li>
              <li><img className="invert" src="search.svg" alt="search" />Search</li>
            </ul>
          </div>
          <div className="library bg-grey rounded m-1 p-1">
            <div className="heading">
              <img className='invert' src="libray.png" alt="" />
              <h2>your Library</h2>
              <div className="footer">
                {/* <div data-testid = "left-sidebar-legal-links"> */}

                
                  <div><a href="https://www.spotify.com/in-en/legal/"> <span>Legal</span></a>
                  </div>
                  <div><a href="https://www.spotify.com/in-en/safetyandprivacy/">
                    <span>Safety &amp; PrivacyCenter</span> </a>
                  </div>
                  <div>
                    <a href="https://www.spotify.com/in-en/legal/privacy-policy/" ><span>Privacy Policy</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.spotify.com/in-en/legal/cookies-policy/"><span >Cookies</span></a>
                  </div>
                  <div>
                    <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3"  >
                      <span data-encore-id="type">AboutAds</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.spotify.com/in-en/accessibility/">
                      <span >Accessibility</span>
                    </a>
                  </div>
                <div> <a draggable="false" href="https://www.spotify.com/legal/cookies-policy/">
                  <span>Cookies</span>
                </a></div>
          
              </div>
            </div>
          </div>

        </div>
        <div className='right border'>
          <div className="header">
            <div className="nav">
              <img className='invert' src="left.png" alt="" />
              <img  className="right-arrow invert" storke="#ffffff" src="right-arrow.png" alt="" />
            </div>
            <div className="button">
              <button>Login</button>
              <button>Signup</button>
            </div>
          </div>
          <div className="spotifyPlayists">
            <h1>Spotify Playlists</h1>
            <div className="cardContainer">
              <div className="card">
               <img aria-hidden="false" draggable="false" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02673219ce701db80780e48020" alt="" class="LBM25IAoFtd0wh7k3EGM bFtVZZnZgTWjjyzkPA5k VPnrctjNWVzCtyD7DZAG PgTMmU2Gn7AESFMYhw4i" srcset="https://i.scdn.co/image/ab67616d00001e02673219ce701db80780e48020 150w, https://i.scdn.co/image/ab67616d00001e02673219ce701db80780e48020 300w, https://i.scdn.co/image/ab67616d0000b273673219ce701db80780e48020 320w, https://i.scdn.co/image/ab67616d0000b273673219ce701db80780e48020 640w" sizes="(min-width: 1280px) 232px, 192px"></img> 
              <h2></h2> 
              <p>Dhurandhar - TItle Track(From...)</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
