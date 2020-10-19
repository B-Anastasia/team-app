import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: true
})
