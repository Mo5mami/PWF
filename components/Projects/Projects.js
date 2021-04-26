import React from 'react'
import PersonalWebsitePresentation from './PersonalWebsitePresentation'
import SERPresentation from './SERPresentation'
import TrashDetectionPresentation from './TrashDetectionPresentation'

function Projects() {
    return (
        <React.Fragment>
            <section id="projects" className="resume section-bg">
            <div className="container" data-aos="fade-up">

              <div className="section-title">
                <h2>Projects</h2>
            </div>
            <SERPresentation></SERPresentation>
            <TrashDetectionPresentation></TrashDetectionPresentation>
            <PersonalWebsitePresentation></PersonalWebsitePresentation>
            </div>
          </section>

        </React.Fragment>
    )
}

export default Projects
