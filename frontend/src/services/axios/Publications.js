import axios from 'axios';

const baseRequest = "http://localhost:8000/api/publications";

export function getAllPublications() {
    const request = baseRequest + "/";
    return axios.get(request);
}