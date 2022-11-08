import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3030',
});

axiosInstance.defaults.timeout = 2500;

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (responce) => {
        const res = responce.data;
        return res;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
