import axios from 'axios';

const baseRequest = "http://localhost:8000/api/publications";

export function getAllPublications() {
    const request = baseRequest + "/";
    return axios.get(request);
}

export function getPublicationById(id) {
    const request = baseRequest + "/" + id;
    return axios.get(request);
}

export function createPublication(form, id) {
    const request = baseRequest + "/create";
    const requestWithImage = baseRequest + "/createWithImage";

    const data = new FormData(form);

    if (form.image.files[0]) {
        const newForm = new FormData();
        newForm.append('userId', id);
        newForm.append('title', data.get('title'));
        newForm.append('text', data.get('text'));
        newForm.append('image', form.image.files[0]);
        return axios.post(requestWithImage, newForm);

    } else {
        const dataForm = {
            userId: id,
            title: data.get('title'),
            text: data.get('text')
        }

        return axios.post(request, dataForm);

    }

}

export function updatePublication(form, id) {
    const request = baseRequest + "/update/" + id;
    const requestWithImage = baseRequest + "/updateWithImage/" + id;
    const data = new FormData(form);

    if (form.image.files[0]) {
        console.log("with image")
        const newForm = new FormData();
        newForm.append('title', data.get('title'));
        newForm.append('text', data.get('text'));
        newForm.append('image', form.image.files[0]);
        return axios.post(requestWithImage, newForm);

    } else {
        console.log("without image")
        const dataForm = {
            title: data.get('title'),
            text: data.get('text')
        }
        return axios.post(request, dataForm);

    }
}

export function updateUserLiked(id) {
    const request = baseRequest + "/update/like/" + id;
    return axios.post(request, {})
}

export function deletePublication(id) {
    const request = baseRequest + "/delete/" + id;
    return axios.delete(request);
}