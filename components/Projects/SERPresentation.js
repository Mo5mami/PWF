import React from 'react'

function SERPresentation() {
    return (
        <div className="container border border-2 rounded shadow-lg bg-white p-3 mb-5">
            <div className="row">
          <div className="col-lg-6 my-auto mb-5">
            <h3 className="resume-title">Speech Emotion recognition</h3>
            <div className="resume-item pb-0">
              <h4>Detect a person emotion through an audio clip</h4>
              <p><em>
              Speech is the most natural way of expressing ourselves as humans.
                It is only natural then to extend this communication medium to computer applications.

                            
                
                </em></p>
                <p><em>
                We define speech emotion recognition (SER) systems as a collection of methodologies that process and classify speech signals
                             to detect the embedded emotions.
                    </em></p>
                <p><em>
                In this project, I trained a 1D CNN based model from 7 features extracted
                from audio on 4 datasets 
                  </em></p>
              <ul>
                <li><strong> Framework/Library : </strong>Tensorflow  &nbsp;
                <a href="https://github.com/facebookresearch/detectron2"> 
                <i className="bi bi-eye"></i> </a> </li>
                <li><strong> Model : </strong> 1D CNN + TimeDistributed layer</li>
                <li><strong> Accuracy : </strong> 70%</li>
                
              </ul>
              <button type="button" class="btn btn-outline-myinfo m-1">View Article</button>
              <button type="button" class="btn btn-outline-myinfo m-1">View Repo</button>
            </div>
            </div>
            <div className="col-lg-6 my-auto">
              <div className="d-flex justify-content-center">
            <img src="assets/img/trash_detection.png" className="rounded img-fluid" alt="" />
            </div>
            </div>
            </div>
            </div>
    )
}

export default SERPresentation
