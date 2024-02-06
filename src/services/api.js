import axios from "axios";

const api = axios.create({
  // baseURL: "https://api-voe-travel-devop.onrender.com", // API EM DEVOP
  baseURL: "http://localhost:3000", // API EM DEVOP-Local
});

export default api;
