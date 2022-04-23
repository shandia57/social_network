import { connection } from "../../index";
import * as deleteFolder from "../../Repository/folder/Delete";

exports.delete = (request: { params: { id: any; }; }, results: any) => {
    connection.then(async connection => {
        deleteFolder.deleteFolder(request, connection, request.params.id)
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400)
        });
}