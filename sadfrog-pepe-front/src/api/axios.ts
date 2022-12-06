import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type IConfig = AxiosRequestConfig;

interface Iresponce {
  messege: string;
}

const requestConfig: IConfig = {
  baseURL: ' http://13.124.239.117',
  timeout: 2500,
  headers: {
    'Content-Type': 'application/json',
  },
};

class HttpRequest {
  api: any;
  constructor() {
    this.api = axios.create(requestConfig);

    this.api.interceptors.request.use(
      (config: IConfig) => {
        return config;
      },
      (error: any) => {
        console.log(error);
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (res: any) => {
        return res;
      },
      (error: any) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }

  async post(url: string, data: string, config?: IConfig) {
    return this.api.post(url, data, config);
  }

  async get(url: string, config?: IConfig) {
    return this.api.get(url, config);
  }
}

const axiosInstance = new HttpRequest();

export default axiosInstance;
