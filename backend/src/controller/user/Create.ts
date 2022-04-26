import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/user/Create";

exports.create = (request: any, results: any) => {
    connection
        .then(async connection => {
            repository.insertUser(request.body, connection)
        })
        .then(() => results.status(201))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}
