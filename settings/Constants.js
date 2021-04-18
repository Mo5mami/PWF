
const prod = {
    url: {
     TRASH_DETECTION_URL : "http://127.0.0.1:8000",
     
   }
}
   
const dev = {
    url: {
        TRASH_DETECTION_URL: "http://127.0.0.1:8000",
    }
}

export const config = process.env.NODE_ENV === "development" ? dev : prod;