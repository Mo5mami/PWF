import React from 'react'

function About() {
    return (
        <React.Fragment>
            <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>
          This is Mokhtar Mami's Personal Website <br></br>
          The <b>main</b> aim of this web app is <strong>to serve as a portfolio</strong>, <strong>to showcase my projects</strong> and <strong>to deliver some projects to PRODUCTION</strong> <br></br>
          If the deployment <strong>isn't working</strong> or <strong>slow</strong>, either my credits are over or the servers are naturally slow <strong>(Student credits)</strong><br></br>
          <strong><em>Happy browsing</em></strong>
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/profile.png" className="rounded img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 my-auto content">
            <h3 className="mt-2">More about me &amp; My background.</h3>
            <p className="fst-italic mt-1">
              A Software engineering student that has been working in ML 
              and especially DL for the past 2 years. 
              </p>
              <p className="fst-italic mt-1">
              I always inspire to learn more and to push myself to my limits 
              Mainly worked on computer vision (2D and 3D data), ML combined 
              with audio data and some NLP tasks.

            </p>
            <div className="row mt-1">
              <div className="col-lg-12">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Address:</strong> <span>Farhat Hached Street 8050 Hammamet</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> 
                  <span>mami.mokhtar123@gmail.com<br></br>
                  mokhtar.mami@insat.u-carthage.tn</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  
                  
                </ul>
              </div>
            </div>
            <p>
              
            </p>
          </div>
        </div>

      </div>
    </section>

        </React.Fragment>
    )
}

export default About
