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
          <div className="footer">
        {/* <div data-testid = "left-sidebar-legal-links"> */}
          <div><a href=""><span>Legal</span></a></div>
          {/* <div><a href=""><span>PrivacyCenter</span></a></div>
          <div><a href=""><span>Cookies</span></a></div>
          <div><a href=""><span>About Ads</span></a></div>
          <div><a href=""><span>Accessibility</span></a></div> */}

          <div class="sc-bmzYkS iLJbxB">
            <div class="sc-jsJBEP iCKNKM"><a href="https://www.spotify.com/in-en/legal/" class="e-91000-text-link e-91000-baseline e-91000-overflow-wrap-anywhere encore-internal-color-text-subdued e-91000-text-link--standalone sc-bXCLTC ekjVst" data-encore-id="textLink" id=""><span data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 gBYjgG">Legal</span></a></div>
          <div class="sc-jsJBEP iCKNKM"><a href="https://www.spotify.com/in-en/safetyandprivacy/" class="e-91000-text-link e-91000-baseline e-91000-overflow-wrap-anywhere encore-internal-color-text-subdued e-91000-text-link--standalone sc-bXCLTC ekjVst" data-encore-id="textLink" id=""><span data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 gBYjgG">Safety &amp; Privacy Center</span></a></div>
          <div class="sc-jsJBEP iCKNKM"><a href="https://www.spotify.com/in-en/legal/privacy-policy/" class="e-91000-text-link e-91000-baseline e-91000-overflow-wrap-anywhere encore-internal-color-text-subdued e-91000-text-link--standalone sc-bXCLTC ekjVst" data-encore-id="textLink" id=""><span data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 gBYjgG">Privacy Policy</span></a></div>
          <div class="sc-jsJBEP iCKNKM"><a href="https://www.spotify.com/in-en/legal/cookies-policy/" class="e-91000-text-link e-91000-baseline e-91000-overflow-wrap-anywhere encore-internal-color-text-subdued e-91000-text-link--standalone sc-bXCLTC ekjVst" data-encore-id="textLink" id=""><span data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 gBYjgG">Cookies</span></a></div>
          <div class="sc-jsJBEP iCKNKM"><a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3" class="e-91000-text-link e-91000-baseline e-91000-overflow-wrap-anywhere encore-internal-color-text-subdued e-91000-text-link--standalone sc-bXCLTC ekjVst" data-encore-id="textLink" id=""><span data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 gBYjgG">About Ads</span></a></div>
          <div class="sc-jsJBEP iCKNKM"><a href="https://www.spotify.com/in-en/accessibility/" class="e-91000-text-link e-91000-baseline e-91000-overflow-wrap-anywhere encore-internal-color-text-subdued e-91000-text-link--standalone sc-bXCLTC ekjVst" data-encore-id="textLink" id=""><span data-encore-id="type" class="Type__TypeElement-sc-goli3j-0 gBYjgG">Accessibility</span></a></div>
          </div>
          <a draggable="false" href="https://www.spotify.com/legal/cookies-policy/" target="_blank" rel="noopener" class="u718uzqdcpnx60Mzh8wA"><span class="e-91000-text encore-text-marginal" data-encore-id="text">Cookies</span></a>
        {/* </div> */}
        </div>
        </div>
      </div>
      
      </div>
      <div className='right border'>
       <div className="header">
        <div className="nav"></div>
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
