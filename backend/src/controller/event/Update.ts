import { connection } from "../../index";
import * as update from "../../Repository/event/Update";

exports.update = (request: { params: { id: any; }; }, results: any) => {
    connection.then(async connection => {
        update.updateEvent(request, connection, request.params.id)
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}