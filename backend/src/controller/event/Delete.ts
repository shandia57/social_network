import { connection } from "../../index";
import * as deleteEvent from "../../Repository/event/Delete";

exports.delete = (request: { params: { id: any; }; }, results: any) => {
    connection.then(async connection => {
        deleteEvent.deleteEvent(request, connection, request.params.id)
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}