import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/user/Read";


exports.findAll = (request: any, results: any) => {
    connection.then(async connection => {
        repository.getUsers(results, connection);
    })
        .then(() => results.sendStatus(200))
        .catch(error => {
            console.log(error);
            results.sendStatus(400);
        });
}

exports.findById = (request: any, results: any) => {
    connection.then(async connection => {
        repository.getUserById(results, connection, request.params.id);
    })
        .then(() => results.sendStatus(200))
        .catch(error => {
            console.log(error);
            results.statusendStatus(400);
        });
}

