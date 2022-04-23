import { connection } from "../../index";
import * as repository from "../../Repository/user/Create";

exports.create = (request: any, results: any) => {
    connection
        .then(async connection => {
            repository.insertUser(request, connection)
        })
        .then(() => results.status(201))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}
