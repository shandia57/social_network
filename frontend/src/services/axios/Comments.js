import axios from 'axios';

const baseRequest = "http://localhost:8000/api/comments";

export function getCommentsByPublicationId(id) {
    const request = baseRequest + "/" + id;
    return axios.get(request);
}