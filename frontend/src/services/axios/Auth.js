import axios from 'axios';

const baseRequest = "http://localhost:8000/api/auth";

export function loginUser(form) {
    const request = baseRequest + "/login";
    const data = new FormData(form);
    const dataForm =
    {
        email: data.get('email'),
        password: data.get('password'),
    }

    return axios.post(request, dataForm);

}