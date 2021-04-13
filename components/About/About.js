import React from 'react'

function About() {
    return (
        <React.Fragment>
            <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>
          {/*The idea came from the fact that I'm originally a software engineering student.<br></br>
          I always tried to train models to get better results, but I also always neglected
          Deployment. <br></br>
          Models inside github repos aren't really the final delivrable that should be
          presented. A project is done once everything is in PRODUCTION
          <br></br>
               That's why I decided to create my personal website to get my work to production.
    Happy browsing.*/}
          This is Mokhtar Mami's Personal Website <br></br>
          The <b>main</b> aim of this web app is to deliver projects to PRODUCTION <br></br>
          Happy browsing
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/profile.png" className="rounded img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>More about me &amp; My background.</h3>
            <p className="fst-italic mt-4">
              A Software engineering student that has been working in ML 
              and especially DL for the past 2 years. <br></br>
              I always inspire to learn more and to push myself to my limits 
              Mainly worked on computer vision (2D and 3D data), ML combined 
              with audio data and some NLP tasks.

            </p>
            <div className="row mt-5">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Address:</strong> <span>Farhat Hached Street 8050 Hammamet</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mami.mokhtar123@gmail.com</span></li>
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
