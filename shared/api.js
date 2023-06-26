import axios from 'axios';

// Create axios client, pre-configured with baseURL
let API = axios.create({
  baseURL: 'https://97b7-2401-4900-813c-455d-b0a0-891e-9d75-686f.ngrok-free.app/NagarNigam/public/api/',
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
  API.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = `application/x-www-form-urlencoded`;
    config.headers.Accept = `application/json`;
    return config;
  });
};

export default API;