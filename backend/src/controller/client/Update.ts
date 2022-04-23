import { connection } from "../../index";
import * as update from "../../Repository/client/Update";


exports.update = (request: { params: { id: any; }; }, results: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: any; }): void; new(): any; }; }; }) => {
    connection.then(async connection => {
        update.updateClient(request, connection, request.params.id)
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}