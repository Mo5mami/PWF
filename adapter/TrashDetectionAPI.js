import axios from 'axios';
const DEV_URL = 'http://127.0.0.1:8000/api/MG3/';

class TrashDetectionAPI {
    sendImage(image,API_URL=DEV_URL){
        const url = `${API_URL}`;
        //console.log("aPI to send : ",url)
        //return axios.post(url,image);
        return axios({url:url,method:"post", 
        config: { headers: { 'Content-Type': 'multipart/form_data' } },
        data:image});
    }
}
export default TrashDetectionAPI;


