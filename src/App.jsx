import { useState } from 'react'
// import script from './script'
// import songs1 from './songs1.jsx'
import PlaylistPlayer from "./PlaylistPlayer";
import './App.css'

function App() {



  return (
    <>
      <div className="container flex  bg-black">
        <div className='left  '>
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
              <ul>
                
              </ul>
              <div className="footer">



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
              <img className="left-arrow invert" storke="#ffffff" src="left.png" alt="" />  
              <img className="right-arrow invert" storke="#ffffff" src="right-arrow.png" alt="" />
            </div>
            <div className="button">
              <button className='signupbtn'>Sign up</button>
              <button className='loginbtn'>Log in</button>
            </div>
          </div>
          <div className="spotifyPlaylists">
            <h1>Spotify Playlists</h1>
            <div className="cardContainer">
              <div className="card border">
                <div className="play">

                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="40" height="40" viewBox="0 0 200 200" role="img" aria-label="Play button inside green circle">

                    <circle cx="100" cy="100" r="100" fill="#28a745" border="2px solid #000"/>


                    <defs>
                      <clipPath id="circleClip">
                        <circle cx="100" cy="100" r="100" />
                      </clipPath>
                    </defs>


                    <image href="play-button.png"
                      x="0" y="0" width="200" height="200"
                      preserveAspectRatio="xMidYMid meet"
                      clip-path="url(#circleClip)" />

                    <polygon points="85,70 85,130 140,100" fill="#000" />
                  </svg>

                 </div>
               <img src="https://i.scdn.co/image/ab67616d00001e02673219ce701db80780e48020" alt="" sizes="(min-width: 1280px) 232px, 192px"></img>
                <h2></h2>
                <p>Dhurandhar - TItle Track(From...)</p>
              </div>
             
            </div>
            <div className="playbar">
              <div className="songinfo">
                
              </div>
              <div className="songbutton">
                <img src="previous(1).png" alt="" />
              <img src="play.png" alt="" />
              <img src="next-button.png" alt="" /> 
              </div>
              <div className="songtime">

              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <script.jsx/> */}
    {/* <songs1.jsx/> */}
    <PlaylistPlayer/>
    </>
   
  )
}

export default App
