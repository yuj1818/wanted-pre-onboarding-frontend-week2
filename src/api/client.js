import axios from "axios";

//baseURL: 'https://api.clinicaltrialskorea.com/api/v1/search-conditions'
const client = axios.create({
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
});

export default client;