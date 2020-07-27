const axios = require("axios");

const mixin = {
  standardFlag: true,
  timeout: 15000,
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "请求错误";
          break;
        case 401:
          error.message = "未授权，请登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求地址出错";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器内部错误";
          break;
        case 501:
          error.message = "服务未实现";
          break;
        case 502:
          error.message = "网关错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网关超时";
          break;
        case 505:
          error.message = "HTTP 版本不受支持";
          break;
        default:
      }
    }
    return Promise.reject(error);
  }
);

function get(options) {
  let params = options.para;
  return new Promise((resolve, reject) => {
    axios
      .get(options.url, {
        params: params,
      })
      .then((response) => {
        let data = response.data;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function post(obj) {
  options = Object.assign({}, mixin, obj);
  return new Promise((resolve, reject) => {
    axios
      .post(options.url, options.body, {
        headers: options.headers,
        params: options.para,
        timeout: options.timeout,
        withCredentials: options.withCredentials,
      })
      .then(
        (response) => {
          let data = response.data;
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
  });
}

const http = {
  get,
  post,
};

module.exports = http;
