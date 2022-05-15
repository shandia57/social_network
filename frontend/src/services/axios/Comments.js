import axios from 'axios';

const baseRequest = "http://localhost:8000/api/comments";

export function getCommentsByPublicationId(id) {
    const request = baseRequest + "/" + id;
    return axios.get(request);
}

export function insertComment(comment, user, publication) {
    const request = baseRequest + "/" + "create";
    const data = {
        text: comment,
        user: user,
        publication: publication
    }
    return axios.post(request, data);

}

export function deleteComment(id) {
    const request = baseRequest + "/delete/" + id;
    return axios.delete(request);
}