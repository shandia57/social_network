import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/user/Update";


exports.update = (request: any, results: any) => {
    connection.then(async connection => {
        repository.updateUser(request, connection, request.params.id)
    })
        .then(() => results.status(202))
        .catch(error => {
            console.log(error);
            results.status(400);
        });
}