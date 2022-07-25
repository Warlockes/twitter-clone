import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.baseURL = "https://alex-twitter-clone-backend.herokuapp.com";
    const token = window.localStorage.getItem("twitter-clone_token");

    if (!config.headers) {
      config.headers = {};
    }

    if (token) {
      config.headers["token"] = token;
    }

    return config;
  }
);

export { axios };
