import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/publication/Read";

exports.findAll = (request: any, results: any) => {
    connection
        .then(async connection => {
            repository.getPublications(request.body, connection)
        })
}


exports.findById = (request: any, results: any) => {
    connection
        .then(async connection => {
            repository.getPublicationById(request.body, connection, request.params.id)
        })
}