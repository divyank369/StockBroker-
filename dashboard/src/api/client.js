import axios from "axios";

import { getStoredAuth } from "../auth/storage";
import { API_BASE_URL } from "../config";

export const publicApi = axios.create({
  baseURL: API_BASE_URL,
});

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const auth = getStoredAuth();

  if (auth?.token) {
    config.headers.Authorization = `Bearer ${auth.token}`;
  }

  return config;
});
