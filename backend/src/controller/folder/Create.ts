import { connection } from "../../index";
import * as create from "../../Repository/folder/Create";

exports.create = (request: any, results: any) => {
    connection.then(async connection => {
        create.insertFolder(request, connection)
    })
        .then(() => results.status(201))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}
