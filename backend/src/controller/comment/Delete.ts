import { connection } from "../../index";
import * as repository from "../../dataBase/Repository/comment/Delete";

exports.delete = (request: any, results: any) => {
    connection.then(async connection => {
        repository.deleteComment(request, connection, request.params.id)
            .then((response) => response ? results.sendStatus(200) : results.sendStatus(400))
    })

}