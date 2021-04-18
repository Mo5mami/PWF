import React, { useRef, useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import TrashDetectionAPI from '../adapter/TrashDetectionAPI';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
var fileDownload = require('js-file-download');
const initialState = 
{
  originalFile:null,
  prediction:null,
  obj_mesh:null,
  upload:false,
  download:false,
  APIError : false,
  dimensions : {height : 0, width : 0}
}
const api=new TrashDetectionAPI()
function TrashDetection() {
    const canvasRef = useRef(null);
    const imgRef = useRef(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const [state, setstate] = useState (initialState) 
    
    const onChangeHandler=event=>{
        setstate({...state,originalFile: event.target.files[0],upload:true ,download : false})
    }
    

    const onClickUpload = () => {
        handleOpen()
        const data = new FormData() 
        data.append('file', state.originalFile)
       //console.log("data to send : ",state.originalFile)
       
        api.sendImage(data)
        .then(res => { 
            console.log("res : ",res)
            const blob = new Blob([Buffer.from(res.data["image"], 'base64')]);
            setstate({...state,APIError:false,download:true,
                    predictedFile:blob,boxes:res.data["boxes"],
                    upload : false })
            //console.log("og file : ",state.originalFile)
            //console.log("pr buffer : ",Buffer.from(res.data["image"], 'base64'))
            
            //console.log("pr blob : ",blob)
            //console.log("pr file : ",new FileReader().readAsArrayBuffer(Buffer.from(res.data["image"], 'base64')))
            handleClose()
            //console.log("done!!")
        }).catch(
            function (error) {
              setstate({...state,APIError:true,download:false, upload:false})
              //setstate({...state,APIError:true,download:true , upload:false})
                handleClose()
                console.log("API error : ")
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  }
                APIError()
                
              
            }
          )
       
    }
    const onClickDownload = () => {
        
          
          
        fileDownload(state.predictedFile,"result.png");
        //setstate({...state,download:false})
  }
  function onImgLoad({target:img}) {
    /*setstate({...state,dimensions:{height:img.offsetHeight,
                               width:img.offsetWidth}});
    let mat = cv.imread(img);*/
    //console.log("mat : ",mat)
  }
  const previewImage=()=>
  {
      
      if(state.upload)
      {
          
          return (
            <div className="d-flex align-self-center justify-content-center m-5">
          <img ref={imgRef} src={URL.createObjectURL(state.originalFile)} className="img-fluid rounded" 
           alt="image load problem"/>
            
    
          </div>
          )
          
      }
      return <React.Fragment></React.Fragment>
  }

  const view_result=()=>
    {
        if(state.download)
        {
            
            return (    
                <div className="d-flex align-self-center justify-content-center m-5">
                    <img ref={imgRef} src={URL.createObjectURL(state.predictedFile)} className="img-fluid rounded" 
                    alt="image load problem"/>
                  
          
                </div>
            )
        }
        return <React.Fragment></React.Fragment>
    }


  const uploadButton=()=> 
  {
      if(state.upload)
          return (
       
          <button type="button" className="btn btn-success btn-block" onClick={onClickUpload}>Choose this image to detect trash objects</button> 
        )
      return <React.Fragment></React.Fragment>
  }

  const downloadButton=()=>{
    if(state.download)
          {
            return (     
                  
                    <button type="button" className="btn btn-success btn-block" onClick={onClickDownload}>download result</button> 
                      
            )
          }
      return <React.Fragment></React.Fragment>
    }

    const buttons = () =>{
        const upload = () =>{ if(state.upload) return uploadButton()}
        const download = () => { if(state.download) return downloadButton()}
        if(state.download || state.upload)
        {
            return (
                <div className="d-flex align-self-center justify-content-center m-5">
             
                    {upload() }
                    {download() }

                   </div>
            )
        }
        return <React.Fragment></React.Fragment>
    }

    const APIError=()=>
    {
       
        
        
        const content = "The model couldn't extract the trash objects"
        toast.error(content, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            console.log("APIERROR done !!!!")
        
        
        
    }

    return (
        <React.Fragment>
            
            <div className="container-fluid d-flex justify-content-center" data-aos="fade-up">
                
                <div className="container p-5 m-5 align-self-center">
                
                <div className="section-title">
                    <h2>Trash detection Project</h2>
                </div>
                <div className="container rounded border border-2 shadow-lg bg-white p-3 m-3">
                   
                       
                   {previewImage()}
            
                    

                    <div className="d-flex align-self-center justify-content-center ml-5 mr-5">
            
                     <input type="file" name="file" onChange={onChangeHandler}/>
                    </div>

                    
                   {/*APIError()*/}

                    {view_result()}

                    {buttons()}

                   
                </div>
                </div>
                </div>
            
        </React.Fragment>
    )
}


export default TrashDetection
