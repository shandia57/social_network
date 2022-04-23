import { connection } from "../../index";
import * as update from "../../Repository/folder/Update";

exports.update = (request: { params: { id: any; }; }, results: any) => {
    connection.then(async connection => {
        update.updateFolder(request, connection, request.params.id)
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}
