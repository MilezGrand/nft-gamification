import axios from "axios"

const baseUrl = "http://26.114.163.139:58000"

const api = axios.create({
    withCredentials: false,
    baseURL: baseUrl
})

api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("access")}`
    return config
})

export default api