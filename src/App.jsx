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
              <img src="left.png" alt="" />
              <img className="right-arrow" src="right-arrow.png" alt="" />
            </div>
            <div className="button">
              <button>Login</button>
              <button>Signup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
