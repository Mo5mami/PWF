import axios from 'axios';
import { config } from '../settings/Constants'

class TrashDetectionAPI {
    sendImage(image,API_URL=config.url.TRASH_DETECTION_URL){
        const url = `${API_URL}/trash-detection/inference/`;
        return axios({url:url,method:"post", 
        config: { headers: { 'Content-Type': 'multipart/form_data' ,  } },
        data:image});
    }
    ping(API_URL=config.url.TRASH_DETECTION_URL){
    	const data = new FormData() 
    	const blob = new Blob([Buffer.from("test", 'base64')])
        data.append('file', blob)
        const url = `${API_URL}/trash-detection/inference/`;
        return axios({url:url,method:"post", 
        config: { headers: { 'Content-Type': 'multipart/form_data' ,  } },
        data:data});
    }
}
export default TrashDetectionAPI;


