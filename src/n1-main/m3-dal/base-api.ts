import axios from 'axios';

const settings = {
    withCredentials: true
}

export const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0/",
    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
   ...settings
})
