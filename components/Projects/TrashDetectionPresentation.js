import React from 'react'
import Link from 'next/link'

function TrashDetectionPresentation() {
    return (
        <div className="container border border-2 rounded shadow-lg bg-white p-3 mb-5">
            <div className="row">
          <div className="col-lg-6 my-auto mb-5">
            <h3 className="resume-title">Trash Detection</h3>
            <div className="resume-item pb-0">
              <h4>Given a photo, detect trash objects</h4>
              <p><em>
                Considering the effect of the pollution on our planet, the automation of detecting 
                trash seem to be the future of auto cleaning.
                
                </em></p>
                <p><em>
                In this project, I finetuned an object detection model on TACO &nbsp;
                <a href="http://tacodataset.org/"> 
                <i className="bi bi-eye"></i> </a>
                : an open image dataset
                Containing annotations
                  </em></p>
              <ul>
                <li><strong> Framework : </strong>detectron2  &nbsp;
                <a href="https://github.com/facebookresearch/detectron2"> 
                <i className="bi bi-eye"></i> </a> </li>
                <li><strong> Model : </strong> R101-FPN</li>
                <li><strong> AP@50 : </strong> 30.71</li>
                <li><strong> Serving Tool : </strong> TorchServe &nbsp;
                <a href="https://pytorch.org/serve/"> 
                <i className="bi bi-eye"></i> </a> </li>
              </ul>
              <Link href="/trash-detection">
                <a target="_blank" type="button" className="btn btn-outline-myinfo">Test It Out</a>
              </Link>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
            <img src="assets/img/trash_detection.png" className="rounded img-fluid" alt="" />
            </div>
            </div>
            </div>
            </div>
            
    )
}

export default TrashDetectionPresentation
