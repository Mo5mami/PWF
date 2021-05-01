import React, { useRef, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import TrashDetectionAPI from '../adapter/TrashDetectionAPI';
import 'react-toastify/dist/ReactToastify.css';
var fileDownload = require('js-file-download');
toast.configure()


const initialState = 
{
  originalFile:null,
  prediction:null,
  obj_mesh:null,
  upload:false,
  download:false,
  waiting:false,
  APIError : false,
}
const api=new TrashDetectionAPI()
function TrashDetection() {
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
    
    /*useEffect(() => {
        api.ping().catch(
            (err) =>{console.log("error : ",err)}
            )
    } , []);*/

    const onClickUpload = () => {
        handleOpen()
        const data = new FormData() 
        data.append('file', state.originalFile)
        setstate({...state,waiting:true })
        api.sendImage(data)
        .then(res => { 
            const blob = new Blob([Buffer.from(res.data["image"], 'base64')]);
            setstate({...state,APIError:false,download:true,
                    predictedFile:blob,boxes:res.data["boxes"],
                    upload : false , waiting:false })
            handleClose()
            
        }).catch(
            function (error) {
              setstate({...state,APIError:true,download:false, upload:false,waiting:false})
                handleClose()
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
        if((state.download || state.upload) && !state.waiting)
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
    }

    const spinner = () =>{

        if(state.waiting)
        {
            return (
                <div class="d-flex justify-content-center m-5">
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>
            )
        }
        return <React.Fragment></React.Fragment>
    }
    const inputForm = () =>{
        if (!state.waiting){
            return (
                <div className="d-flex align-self-center justify-content-center ml-5 mr-5">
                     <input type="file" name="file" onChange={onChangeHandler}/>
                </div>
            )
        }
        return <React.Fragment></React.Fragment>
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
                    {inputForm()}
                    {view_result()}
                    {buttons()}
                    {spinner()}
                </div>
                </div>
                </div>
            
        </React.Fragment>
    )
}


export default TrashDetection
