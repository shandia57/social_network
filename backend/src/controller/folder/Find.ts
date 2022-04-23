import { connection } from "../../index";
import * as get from "../../Repository/folder/Get";


exports.findAll = (request: any, results: any) => {
    connection.then(async connection => {
        get.getFolders(results, connection);
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}

exports.findById = (request: { params: { id: any; }; }, results: any) => {
    connection.then(async connection => {
        get.getFolderById(results, connection, request.params.id);
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}

exports.findLast = (request: { params: {count: number; }; }, results: any) => {
    connection.then(async connection => {
        get.getLastFolders(results, connection, request.params.count);
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}