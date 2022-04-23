import { connection } from "../../index";
import * as create from "../../Repository/client/Create";

exports.create = (request: any, results: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: any; }): void; new(): any; }; }; }) => {
    connection
        .then(async connection => {
            create.insertClient(request, connection)
        })
        .then(() => results.status(201))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}
