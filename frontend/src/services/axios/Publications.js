import axios from 'axios';

const baseRequest = "http://localhost:8000/api/publications";

export function getAllPublications() {
    const request = baseRequest + "/";
    return axios.get(request);
}

export function createPublication(form, id) {
    const request = baseRequest + "/create";
    const requestWithImage = baseRequest + "/createWithImage";

    const data = new FormData(form);

    if (form.image.files[0]) {
        console.log("with image")
        const newForm = new FormData();
        newForm.append('userId', id);
        newForm.append('title', data.get('title'));
        newForm.append('text', data.get('text'));
        newForm.append('image', form.image.files[0]);
        return axios.post(requestWithImage, newForm);

    } else {
        console.log("without image")
        const dataForm = {
            userId: id,
            title: data.get('title'),
            text: data.get('text')
        }

        return axios.post(request, dataForm);

    }

}