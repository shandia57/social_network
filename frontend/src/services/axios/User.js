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