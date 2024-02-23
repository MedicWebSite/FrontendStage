import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'http://147.45.103.204:4040/api',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
})


export default ApiInstance