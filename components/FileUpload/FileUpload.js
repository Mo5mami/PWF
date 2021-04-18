import React,{useState} from 'react'



import ModelGenerationApi from 'api/ModelGeneration';






var fileDownload = require('js-file-download');
const initialState = 
{
  originalFile:null,
  prediction:null,
  obj_mesh:null,
  upload:false,
  download:false
}

const api=new ModelGenerationApi()


function FileUpload() {
    
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
        
    setstate({...state,originalFile: event.target.files[0],upload:true})
        
    
    }
    const onClickUpload = () => {
        handleOpen()
        const data = new FormData() 
        data.append('file', state.originalFile)
       console.log("data to send : ",state.originalFile)
        api.sendImage(data)
        .then(res => { 
            
            setstate({...state,APIError:false,download:true,predictedFile:Buffer.from(res.data["ply_mesh"], 'base64'),obj_mesh:res.data["obj_mesh"],predicted_cam:res.data["camera"]})
            handleClose()
        }).catch(
            function (error) {
              setstate({...state,APIError:true,download:false})
                handleClose()
                console.log("API error : ",error)
                
              
            }
          )
       
    }
    const onClickDownload = () => {
        
          
          
          fileDownload(state.predictedFile,"mesh.ply");
          //setstate({...state,download:false})
    }
    const previewImage=()=>
    {
        
        if(state.upload)
        {
            
            return <Grid item> <img src={URL.createObjectURL(state.originalFile)} className="img-fluid" alt="image load problem" style={{height:"600px",width:"600px"}}/> </Grid>
            
        }
        return <React.Fragment></React.Fragment>
    }
    const uploadButton=()=> 
    {
        if(state.upload)
            return (
          <Grid item>
            <button type="button" className="btn btn-success btn-block" onClick={onClickUpload}>Choose this image to create the 3d model</button> 
          </Grid>)
        return <React.Fragment></React.Fragment>
    }

    const downloadButton=()=>{
      if(state.download)
            {
              return (     
                    <Grid item>
                      <button type="button" className="btn btn-success btn-block" onClick={onClickDownload}>download result</button> 
                      </Grid>   
              )
            }
        return <React.Fragment></React.Fragment>
    }

    const model_view=()=>
    {
        if(state.download)
        {
            
            return (    
            <Grid item>    
                <SceneWrapper mesh={URL.createObjectURL(new File([state.obj_mesh],"result.txt"))} camera_position={state.predicted_cam[0]}  resize={4}></SceneWrapper>
                </Grid>
            )
        }
        return <React.Fragment></React.Fragment>
    }
    const showCameraPos=()=>
    {
        if(state.download)
        {
            
            const camera_position=state.predicted_cam[0].map((number) => <li>{number}</li> );
            return (       
                <Grid item> 
                <MyTable camera={state.predicted_cam[0]}></MyTable>
                  </Grid>

            )
        }
        return <React.Fragment></React.Fragment>
    }
    const APIError=()=>
    {
        if(state.APIError)
        {
            //console.log("test : ",URL.createObjectURL(state.predictedFile))
            //numbers.map((number) =>  <li>{number}</li>);
            
            return (
            <Box bgcolor="error.main"color="white"  display="inline" textAlign="center" borderRadius={16}>
            <Grid item >   
              
                <Container >The model couldn't extract the car from the images</Container>
              
              
            </Grid>
            </Box>
            )
        }
        return <React.Fragment></React.Fragment>
    }
    return (
        <React.Fragment>
            <Grid container direction="column" justify="space-around" alignItems="center" spacing={5}>
            
            {previewImage()}
            
            <Grid item >
             <input type="file" name="file" onChange={onChangeHandler}/>
             </Grid>
             
             {uploadButton()}
              
              
             {downloadButton()}
             
             
             
             
            
             
             
             <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
            
             {APIError()}
              </Grid>
        </React.Fragment>
    )
}

export default FileUpload
