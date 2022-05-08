import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/user/Read";


exports.findAll = (request: any, results: any) => {
    connection.then(async connection => {
        repository.getUsers(results, connection)
            .then((response) => { if (!response) results.sendStatus(404) })
    })
}

exports.findById = (request: any, results: any) => {
    connection.then(async connection => {
        repository.getUserById(results, connection, request.params.id)
            .then((response) => { if (!response) results.sendStatus(404) })
    })
}

