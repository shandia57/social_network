import { connection } from "../../index";
import * as create from "../../Repository/event/Create";

exports.create = (request: any, results: any) => {
    connection.then(async connection => {
        create.insertEvent(request, connection)
    })
        .then(() => results.status(201))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}