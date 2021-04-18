import axios from 'axios';
import { config } from '../settings/Constants'

class TrashDetectionAPI {
    sendImage(image,API_URL=config.url.TRASH_DETECTION_URL){
        const url = `${API_URL}/trash-detection/inference/`;
        //console.log("aPI to send : ",url)
        //return axios.post(url,image);
        return axios({url:url,method:"post", 
        config: { headers: { 'Content-Type': 'multipart/form_data' ,  } },
        //data:{"image" : image}});
        data:image});
    }
}
export default TrashDetectionAPI;


