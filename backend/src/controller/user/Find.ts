import { connection } from "../../index";
import * as repository from "../../Repository/user/Read";


exports.findAll = (request: any, results: any) => {
    connection.then(async connection => {
        repository.getUsers(results, connection);
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}

exports.findById = (request: any, results: any) => {
    connection.then(async connection => {
        repository.getUserById(results, connection, request.params.id);
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}
