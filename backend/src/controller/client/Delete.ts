import { connection } from "../../index";
import * as deleteClient from "../../Repository/client/Delete";

exports.delete = (request: { params: { id: any; }; }, results: any) => {
    connection.then(async connection => {
        deleteClient.deleteClient(request, connection, request.params.id)
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}