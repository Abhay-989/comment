import axios from 'axios';
//in production therre's no localhost so we have to make this dynamic
const BASE_UEL = import.meta.env.Mode === "development" ? "htttp://localhost:3000/api" : "/api";

const api=axios.create({
    baseURL: 'http://localhost:3000/api',
});
export default api;