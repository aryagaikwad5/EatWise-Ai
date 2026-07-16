import axios from "axios";

const api = axios.create({
    baseURL: "https://eatwise-backend-s2n8.onrender.com"
});

export default api;