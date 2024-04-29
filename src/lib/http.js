import axios from 'axios'

const HTTP_BASE_URL = 'http://127.0.0.1:3001/api/v1'

const HTTP_TIMEOUT = 3

const http = axios.create({
    baseURL: HTTP_BASE_URL,
    timeout: HTTP_TIMEOUT * 1000,
    withCredentials: false
})

export default http;
