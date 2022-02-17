import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
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
