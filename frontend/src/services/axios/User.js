import axios from 'axios';

const baseRequest = "http://localhost:8000/api/users";

export function createUser(form) {
    const request = baseRequest + "/create";
    const data = new FormData(form);
    const dataForm =
    {
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        birthday: data.get('birthday'),
        email: data.get('email'),
        password: data.get('password'),
    }

    return axios.post(request, dataForm);

}

export function getUserById(id) {
    const request = baseRequest + "/" + id;
    return axios.get(request);
}

export function updateUser(form, id) {
    const request = baseRequest + "/update/" + id;
    const data = new FormData(form);
    const dataForm =
    {
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        birthday: data.get('birthday'),
        email: data.get('email'),
        password: data.get('password'),
    }

    return axios.post(request, dataForm);

}

export function updateUserPhoto(file, id) {
    const request = baseRequest + "/update/photo/" + id;
    const data = new FormData();
    data.append('image', file);
    if (file) {
        console.log("data sended")
        return axios.post(request, data);
    }
}

export function deleteUser(id) {
    const request = baseRequest + "/delete/" + id;
    return axios.delete(request);
}