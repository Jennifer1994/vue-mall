import axios from 'axios'
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })


  //2.axios的拦截器
  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // 添加响应拦截器
  instance.interceptors.response.use(function (res) {
    return res.data;
  }, function (error) {
    return Promise.reject(error);
  });

  //3.发送请求
  return instance(config)

}

