import axios from "axios";
import { getToken, removeToken } from "@/utils/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          console.error("Geçersiz istek");
          break;

        case 401:
          removeToken();
          if (window.location.pathname !== "/admin/login") {
            window.location.href = "/admin/login";
          }
          break;

        case 403:
          console.error("Erişim reddedildi");
          break;

        case 500:
          console.error("Sunucu hatası");
          break;
      }
    } else {
      console.error(
        "Sunucuya ulaşılamadı. İnternet bağlantınızı kontrol edin.",
      );
    }

    return Promise.reject(error);
  },
);

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
