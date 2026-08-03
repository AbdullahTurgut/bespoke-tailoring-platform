import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
          console.error("Yetkisiz erişim");
          break;

        case 403:
          console.error("Erişim reddedildi");
          break;

        case 500:
          console.error("Sunucu hatası");
          break;
      }
    } else {
      console.error("Sunucuya ulaşılamıyor");
    }

    return Promise.reject(error);
  },
);

export default api;
