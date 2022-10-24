import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import aa from './img/aa.png';
import logo from './img/logo.png'
import whats from './img/WhatsApp Image 2022-03-03 at 2.13.30 PM.jpeg'
import whatsa from './img/WhatsApp Image 2022-03-03 at 2.14.53 PM.jpeg'
import whatsap from './img/WhatsApp Image 2022-03-03 at 2.15.11 PM.jpeg'
const Howtouse = () => {
  return (
    <div>

<div class="how-section" id="how-section">
                    <section class="section">
                        <div class="container">
                            <div class="columns">
                                <div class="column">
                                    <div class="why-heading">
                                        <h1 class="title why-title is-3">How to <span class="text-primary">Download video Facebook</span></h1>

                                    </div>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="item column is-4">
                                    <img src={whats}></img>
                                    <div class="des">
                                        <h1 class="title is-4"><span class="step-count">1</span>Copy and paste video link</h1>
                                        <p>From <a href="https://www.facebook.com/" class="open-externallink" target="_blank" rel="nofollow noopener noreferrer">Facebook</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
                                    </div>
                                </div>
                                <div class="item column is-4">
                                    <img src={whatsa}></img>
                                    <div class="des">
                                        <h1 class="title is-4"><span class="step-count">2</span>Click On "Get Vedio"</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
                                    </div>
                                </div>
                                <div class="item column is-4">
                                    <img src={whatsap}></img>
                                    <div class="des">
                                        <h1 class="title is-4"><span class="step-count">3</span>Click On "Download Button"</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mauris aliquam, consequat ligula vel, sollicitudin magna. Maecenas a pharetra risus. Vivamus aliquet lobortis felis. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div id="ad-slot">
                                {/* <ins class="adsbygoogle" data-ad-client="ca-pub-3226157429955034" data-ad-slot="7059184362"></ins> */}
                              
                            </div>
                        </div>
                    </section>
                </div>
      <footer>
        <section className="section pd-0"><div className="container"></div></section>

        <section className="section copyright pd-0">
          <div className="container">
            <div className="columns">
              <div className="column pd-0"><div className="copyright-text"><p className="text-center">
               <Link to="/aboutus">Aboutus</Link>
                &ensp;&ensp;<Link to="/term">Terms & Conditions</Link>&ensp;&ensp;<Link to="/privacy">Privacy Policy</Link></p></div></div>
            </div>

            <div className="columns">
                            <div className="column pd-0"><div className="copyright-text" >© 2022. All rights reserved.</div></div>
                        </div>

          </div>
        </section>
      </footer>
    </div>
  )
}

export default Howtouse