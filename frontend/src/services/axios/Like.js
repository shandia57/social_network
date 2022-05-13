import axios from "axios";

const baseRequest = "http://localhost:8000/api/likes";


export function insertLike(publication, user) {
    const request = baseRequest + "/create";
    const data = {
        user: user,
        publication: publication
    }
    return axios.post(request, data);

}

export function getLikeByPublicationId(id) {
    const request = baseRequest + "/" + id;
    return axios.get(request);
}