import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建axios实例
const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.MODE === 'production' 
    ? import.meta.env.VITE_API_BASE_URL 
    : '/api', // 开发环境使用代理，生产环境直接使用API地址
  timeout: 10000,
  headers: {
    // 'Content-Type': 'application/json;charset=utf-8'
  }
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 这里可以添加token等认证信息
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 这里可以根据后端返回的数据结构进行统一处理
    const { data } = response;
    return data;
  },
  (error) => {
    console.error('响应错误:', error);
    // 这里可以根据错误状态码进行统一处理
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，可以跳转到登录页
          console.error('未授权，请重新登录');
          break;
        case 403:
          console.error('拒绝访问');
          break;
        case 404:
          console.error('请求错误，未找到该资源');
          break;
        case 500:
          console.error('服务器错误');
          break;
        default:
          console.error(`请求错误: ${error.response.status}`);
      }
    }
    return Promise.reject(error);
  }
);

// 封装get请求
export const get = <T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> => {
  return http.get(url, { params, ...config });
};

// 封装post请求
export const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return http.post(url, data, config);
};

// 封装put请求
export const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return http.put(url, data, config);
};

// 封装delete请求
export const del = <T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> => {
  return http.delete(url, { params, ...config });
};

export default http;