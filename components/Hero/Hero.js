import React from 'react'

function Hero() {
    return (
        <div>
          <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>Mokhtar Mami</h1>
            <p>I'm <span className="typed" data-typed-items="A Software Engineering Student,A Data Science Enthusiast"></span></p>
            <div className="social-links">
                <a href="https://github.com/Mo5mami" className="github"><i className="bx bxl-github"></i></a>
                <a href="https://www.linkedin.com/in/mokhtar-mami/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            </div>
        </section>  
        </div>
    )
}

export default Hero
