import axios from "axios";

const client = axios.create({
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
    baseURL: 'https://api.clinicaltrialskorea.com/api/v1/'
});

export default client;