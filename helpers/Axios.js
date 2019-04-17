import axios from "axios";
import { API_ADDRESS } from "../constants";

export const axiosFactory = (path, config = {}) =>
  axios.create({
    baseURL: `${API_ADDRESS}${path}`,
    ...config,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...config.headers
    }
  });
