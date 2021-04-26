import React from 'react'

function PersonalWebsitePresentation() {
    return (
        <div className="container border border-2 rounded shadow-lg bg-white p-3 mb-5">
            <div className="row">
          <div className="col-lg-6 my-auto mb-5">
            <h3 className="resume-title">Personal Website</h3>
            <div className="resume-item pb-0">
              <h4>Portfolio, showcase projects and deploy some</h4>
              
                <p><em>
                The personal website is a web application consist of 3 servers:
                </em></p>
                <p><em>
                <i class="bi bi-chevron-right"></i> <strong>The frontend server:</strong> <span>React and Next.js</span>
                    </em></p>
                    <p><em>
                <i class="bi bi-chevron-right"></i> <strong>The backend server:</strong> <span>Django rest framework</span>
                    </em></p>

                    <p><em>
                <i class="bi bi-chevron-right"></i> <strong>The models server:</strong> <span>TorchServe for PyTorch models</span>
                    </em></p>
                
              <a href="https://github.com/Mo5mami/PWF" type="button" className="btn btn-outline-myinfo m-1" target="_blank">Frontend repo</a>
              <a href="https://github.com/Mo5mami/PWB" type="button" className="btn btn-outline-myinfo m-1" target="_blank">Backend repo</a>
              <a href="https://github.com/Mo5mami/TSS" type="button" className="btn btn-outline-myinfo m-1" target="_blank">Torchserve repo</a>
            </div>
            </div>
            <div className="col-lg-6 my-auto">
              <div className="d-flex justify-content-center">
            <img src="assets/img/PW.png" className="rounded img-fluid" alt="" />
            </div>
            </div>
            </div>
            </div>
    )
}

export default PersonalWebsitePresentation
